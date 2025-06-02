using TaskManager.Models;

namespace TaskManager.Services
{
    public class SmsNotificationService : NotificationService
    { 
        public SmsNotificationService() : base("Gestor de tareas") { }

        public override Task NotifyTaskCreatedAsync(TaskItem task)
        {
            // Imaginete que aqui te mando el SMS
            Console.WriteLine($"[SMS] {SenderName}: Nueva tarea 'task.Title'");
            return Task.CompletedTask;        
        }
    }
}
