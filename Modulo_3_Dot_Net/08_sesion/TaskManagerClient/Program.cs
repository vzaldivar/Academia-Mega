using TaskManagerClient.Services;
using TaskManagerClient;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

/*
var AllowedOrigin = "BlazorClient"
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowedOrigin, policy =>
    {
        policy.WithOrigins("http://localhost:5193")
            .AllowedAnyHeader()
            .AllowedAnyMethod();
            // .AllowedCredentials() Solo si usamos una cookie de sesion
    });
});
*/

builder.RootComponents.Add<App>("#app");

builder.Services.AddSingleton(sp =>
{
    var http = new HttpClient();
    return http;
});

builder.Services.AddScoped<ITaskReader, TaskService>();
builder.Services.AddScoped<ITaskWriter, TaskService>();

await builder.Build().RunAsync();
