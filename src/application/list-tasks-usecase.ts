import { listTasksResponseDTO } from './../domain/dtos/task-dtos';
import { TaskRepository } from '@/domain/repositories/task-repository';
import { UseCase } from "@/domain/ports";

export class ListTasksUseCase implements UseCase {
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }
    async execute(): Promise<listTasksResponseDTO> {
        const response = await this.taskRepository.list()
        return response
    }
}