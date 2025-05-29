using TaskManager.Models;

namespace TaskManager.Repositories
{
    public interface ITaskRepository
    {   
        Task<IEnumerable<TaskItemTask>> GetAllAsync();

        Task AddAsync(TaskItem taskItem);


    }
}
    