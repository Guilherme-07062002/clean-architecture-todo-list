import { TaskRepository } from '@/domain/repositories/task-repository';
import { UseCase } from "@/domain/ports";
import { Task } from '@/domain/entities';

export class ListTasksUseCase implements UseCase {
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }
    async execute(): Promise<Task[]> {
        const response = await this.taskRepository.list()
        return response
    }
}