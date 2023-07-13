import { removeTaskDTO } from "@/domain/dtos";
import { UseCase } from "@/domain/ports";
import { TaskRepository } from "@/domain/repositories/task-repository";

export class RemoveTaskUseCase implements UseCase<removeTaskDTO, boolean>{
    constructor(
        private readonly taskRepository: TaskRepository
    ) { }
    async execute(data: removeTaskDTO): Promise<boolean> {
        const response = await this.taskRepository.remove(data)
        return response
    }
}