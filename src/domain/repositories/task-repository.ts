import { Task } from './../entities/task';
import { createTaskDTO, removeTaskDTO } from './../dtos/task-dtos';

export interface TaskRepository {
    create(data: createTaskDTO): Promise<Task | Object>
    remove(data: removeTaskDTO): Promise<boolean>
}