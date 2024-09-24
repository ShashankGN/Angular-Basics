var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("EnableCORS", builder =>
    {
        builder.AllowAnyHeader()
        .AllowAnyOrigin()
        .AllowAnyMethod();
    });
});
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("EnableCORS");
app.UseAuthorization();

app.MapControllers();

app.Run();
