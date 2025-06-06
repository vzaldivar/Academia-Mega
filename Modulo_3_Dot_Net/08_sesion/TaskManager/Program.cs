using TaskManager.Repositories;
using TaskManager.Services;
using Microsoft.AspNetCore.Cors;
using TaskManager.Shared.PubSub;

var builder = WebApplication.CreateBuilder(args);

var AllowedOrigin = "BlazorClient";
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowedOrigin, policy =>
    {
        policy.WithOrigins("http://localhost:5187")
            .AllowAnyHeader()
            .AllowAnyMethod();
            // .AllowedCredentials() Solo si usamos una cookie de sesion
    });
});

builder.Services.AddControllers();

builder.Services.AddScoped<INotificationService, EmailNotificationService>();
builder.Services.AddScoped<INotificationService, SmsNotificationService>();
builder.Services.AddSingleton<ITaskRepository, InMemoryTaskRepository>();

builder.Services.AddSingleton<EventBus>();
builder.Services.AddSignalR();
//builder.Services.AddScoped<ITaskRepository, InMemoryTaskRepository>();

builder.Services.AddSwaggerGen();

var app = builder.Build();

app.MapControllers();

app.MapHub<TaskEventHub>("/taskEvent");

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(AllowedOrigin);

app.UseHttpsRedirection();
app.Run();
