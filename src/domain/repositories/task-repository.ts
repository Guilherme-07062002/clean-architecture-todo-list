import { Task } from './../entities/task';
import { createTaskDTO } from './../dtos/task-dtos';

export interface TaskRepository {
    create(data: createTaskDTO): Promise<Task | Object>
}