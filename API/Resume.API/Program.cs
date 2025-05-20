

using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Amazon.S3;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Options;
using Amazon.Extensions.NETCore.Setup;
using OpenAI;
using Resume.Core.IRepository;
using Resume.Core.IServices;
using Resume.Service.Services;
using Data.Repositories;
using Resume.Data;
using Resume.Core;
using Resume.Data.Repositories;
using Swashbuckle.AspNetCore.SwaggerGen;
//using ResumeAnalyzer;
using var client = new HttpClient();

// Your API key
var apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");
client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");

var response = await client.GetAsync("https://api.openai.com/v1/models");

if (response.IsSuccessStatusCode)
{
    var content = await response.Content.ReadAsStringAsync();
    Console.WriteLine("Available Models:");
    Console.WriteLine(content); // This will print the models your API key has access to
}
else
{
    Console.WriteLine($"Error fetching models: {response.StatusCode}");
}
    

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

// ✅ Load appsettings.json (required)
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
Console.WriteLine("AWS Region: " + builder.Configuration["AWS:Region"]);
// ✅ Register AWSOptions from configuration
builder.Services.Configure<AWSOptions>(builder.Configuration.GetSection("AWS"));
builder.Services.AddHttpClient();
// ✅ Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    c.OperationFilter<SwaggerFileOperationFilter>(); // ✅ Add this line
});

//builder.Services.AddSwaggerGen();
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("MyPolicy", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddOpenApi();

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IAuthRepository, AuthRepository>();
builder.Services.AddScoped<IResumeFileService, ResumeFileService>();
builder.Services.AddScoped<IResumefileRepository, ResumeFileRepository>();
builder.Services.AddScoped<IAIService,AIService>();
builder.Services.AddScoped<IAIRepository, AIRepository>();

builder.Services.AddDbContext<ResumeContext>();
builder.Services.AddAutoMapper(typeof(MappingProFile));

// ✅ Add Amazon S3 with region fix
builder.Services.AddSingleton<IAmazonS3>(serviceProvider =>
{
    var config = builder.Configuration;
    var options = serviceProvider.GetRequiredService<IOptions<AWSOptions>>().Value;

    var accessKey = config["AWS:AccessKey"];
    var secretKey = config["AWS:SecretKey"];
    var regionValue = config["AWS:Region"];

    if (string.IsNullOrEmpty(accessKey) || string.IsNullOrEmpty(secretKey) || string.IsNullOrEmpty(regionValue))
    {
        throw new InvalidOperationException("AWS credentials or region are not configured properly in appsettings.json.");
    }

    var credentials = new Amazon.Runtime.BasicAWSCredentials(accessKey, secretKey);
    var region = Amazon.RegionEndpoint.GetBySystemName(regionValue);

    return new AmazonS3Client(credentials, region);
});

// ✅ OpenAI client from env variable
builder.Services.AddScoped<OpenAIClient>(provider =>
{
    var apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");
    if (string.IsNullOrEmpty(apiKey))
    {
        throw new Exception("OPENAI_API_KEY environment variable is not set.");
    }
    return new OpenAIClient(apiKey);
});

var app = builder.Build();

// ✅ Use Swagger
try
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = string.Empty;
    });
}
catch (Exception ex)
{
    Console.WriteLine($"Swagger Error: {ex.Message}");
}

//app.UseSwagger();
//app.UseSwaggerUI(c =>
//{
//    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
//    c.RoutePrefix = string.Empty;
//});

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ✅ Middleware
app.UseCors("MyPolicy");
app.UseAuthorization();
app.MapControllers();



// ✅ Catch startup errors for better debug info
try
{
    app.Run();
}
catch (Exception ex)
{
    Console.WriteLine($"Startup Error: {ex.Message}");
    throw;
}




