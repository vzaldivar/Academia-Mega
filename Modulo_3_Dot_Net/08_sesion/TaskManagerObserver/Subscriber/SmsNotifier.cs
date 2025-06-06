using Domain.Events;
using System.Diagnostics;

namespace Subscribers;

public class SmsNotifier : IObserver<SmsNotifier>
{
        public void OnCompleted() { }

        public void OnError(Exception error) { }

        public void OnNext(TaskEvent taskEvent) 
        {
            if (TaskEvent.EventName == "Deleted")
                Console.WriteLine($"[SMS] Nueva tarea: {taskEvent.Payload.Title}");
        }

}