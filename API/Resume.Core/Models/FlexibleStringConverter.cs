using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Threading.Tasks;

namespace Resume.Core.Models
{
    public class FlexibleStringConverter : JsonConverter<string>
    {
        public override string Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            // אם הגיע מספר - להחזיר כמחרוזת
            if (reader.TokenType == JsonTokenType.Number)
            {
                return reader.GetDouble().ToString();
            }

            // אם הגיע מחרוזת - להחזיר כמו שהיא
            if (reader.TokenType == JsonTokenType.String)
            {
                return reader.GetString();
            }

            // אחרת - שגיאה
            throw new JsonException($"Unexpected token {reader.TokenType} when parsing string.");
        }

        public override void Write(Utf8JsonWriter writer, string value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value);
        }
    }
}