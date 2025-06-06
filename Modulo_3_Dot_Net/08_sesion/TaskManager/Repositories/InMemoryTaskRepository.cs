using TaskManager.Models;
using System.Collections.Concurrent;
using Microsoft.AspNetCore.SignalR;
using TaskManager.Shared.PubSub;
using TaskManager.Shared.Events;
using TaskManager.Shared.Domine;

namespace TaskManager.Repositories
{
    public class InMemoryTaskRepository : ITaskRepository
    {        
        private readonly ConcurrentDictionary<Guid, TaskItem> _db = new();

        private readonly EventBus _bus;
        private readonly IHubContext<TaskEventHub> _hub;

        public InMemoryTaskRepository(EventBus bus, IHubContext<TaskEventHub> hub)
        {
            _bus = bus;
            _hub = hub;
        }

        public Task<IEnumerable<TaskItem>> GetAllAsync() =>
            Task.FromResult(_db.Values.AsEnumerable());

        public Task<TaskItem?> GetAsync(Guid id) =>
            Task.FromResult(_db.GetValueOrDefault(id));
        
        public Task AddAsync(TaskItem task)
        {
            _db[task.id] = task;
            return Task.CompletedTask;
        }

        public Task UpdateAsync(TaskItem task)
        {
            _db[task.id] = task;
            return Task.CompletedTask;
        }

        public Task DeleteAsync(Guid id)
        {
            _db.TryRemove(id, out _);
            return Task.CompletedTask;
        }

    }
}