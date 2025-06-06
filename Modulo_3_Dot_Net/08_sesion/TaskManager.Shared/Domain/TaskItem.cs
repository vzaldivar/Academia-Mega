// Este nos va a servir para el DTO del backend

namespace TaskManager.Domain;

public class TaskItem 
{
    public Guid id  { get; } = Guid.NewGuid();

    public string Title { get; init; } = string.Empty;

    public string? Description { get; init; }

    public bool IsDone { get; private et; }    

    public void Complete() => IsDone = true;
}