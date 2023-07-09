import { TaskRepository } from './../domain/repositories/task-repository';
import { Task } from './../domain/entities/task';
import { createTaskDTO } from './../domain/dtos/task-dtos';
import { UseCase } from './../domain/ports/usecase';

export class CreateTaskUseCase implements UseCase<createTaskDTO, Task | Object>{
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }
    async execute(data: createTaskDTO): Promise<Task | Object> {
        const response = await this.taskRepository.create(data)
        return response
    }
}