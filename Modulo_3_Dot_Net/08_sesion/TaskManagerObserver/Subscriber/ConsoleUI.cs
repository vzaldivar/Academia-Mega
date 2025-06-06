using Domain.Events;
using System.Diagnostics;

namespace Subscribers;

public class ConsoleUI : IObserver<SmsNotifier>
{
        public void OnCompleted() { }

        public void OnError(Exception error) 
        {
            Console.WriteLine($"Error: {error.message}");
        }

        public void OnNext(TaskEvent taskEvent) =>
            Console.WriteLine($"[UI] -> {taskEvent.EventName}: {taskEvent.Payload.Title}");
        
}