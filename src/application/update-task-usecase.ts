import { TaskRepository } from '@/domain/repositories/task-repository';
import { updateTaskDTO } from "@/domain/dtos";
import { UseCase } from "@/domain/ports";

export class UpdateTaskUsecase implements UseCase<updateTaskDTO, boolean>{
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }
    async execute(data: updateTaskDTO): Promise<boolean> {
        const response = await this.taskRepository.update(data as updateTaskDTO)
        return response
    }
}