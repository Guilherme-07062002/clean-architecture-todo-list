import { Task } from './../entities/task';
import { createTaskDTO, removeTaskDTO, updateTaskDTO } from './../dtos/task-dtos';

export interface TaskRepository {
    create(data: createTaskDTO): Promise<Task | Object>
    remove(data: removeTaskDTO): Promise<boolean>
    update(data: updateTaskDTO): Promise<boolean>
}