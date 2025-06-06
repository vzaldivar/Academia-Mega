using Microsoft.AspNEtCore.SignalR.Client;
using TaskManager.Shared.Events;

var connection = new HubConnectionBuilder()
    .WithUrl("http://localhost:5080/taskEvent")
    .Build();

connection.On<TaskEvent>("TaskEvent", ev =>
{
    Console.WriteLine($"{ev.EventName}: {ev.Payload.Title}");
});

await connection.StarrAsync();
Console.WriteLine("Observando eventos...");
await Task.Delay(Timeout.Infinite);
