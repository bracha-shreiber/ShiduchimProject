using Microsoft.AspNetCore.Http;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Linq;

public class SwaggerFileOperationFilter : IOperationFilter
{
    public void Apply(OpenApiOperation operation, OperationFilterContext context)
    {
        var formFileParams = context.MethodInfo
            .GetParameters()
            .Where(p => p.ParameterType == typeof(IFormFile) ||
                        (p.ParameterType.IsClass && p.ParameterType
                            .GetProperties().Any(prop => prop.PropertyType == typeof(IFormFile))));

        if (formFileParams.Any())
        {
            operation.RequestBody = new OpenApiRequestBody
            {
                Content =
                {
                    ["multipart/form-data"] = new OpenApiMediaType
                    {
                        Schema = new OpenApiSchema
                        {
                            Type = "object",
                            Properties = formFileParams
                                .SelectMany(p => p.ParameterType.GetProperties())
                                .ToDictionary(
                                    prop => prop.Name,
                                    prop => new OpenApiSchema
                                    {
                                        Type = prop.PropertyType == typeof(IFormFile) ? "file" : "string",
                                        Format = prop.PropertyType == typeof(IFormFile) ? "binary" : null
                                    }
                                ),
                            Required = formFileParams
                                .SelectMany(p => p.ParameterType.GetProperties())
                                .Where(p => p.PropertyType == typeof(IFormFile))
                                .Select(p => p.Name)
                                .ToHashSet()
                        }
                    }
                }
            };
        }
    }
}
