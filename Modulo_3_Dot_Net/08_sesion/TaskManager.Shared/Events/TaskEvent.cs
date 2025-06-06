namespace Domain.Shared.Events;

public record TaskEvent(string EventName, TaskItem Payload);

