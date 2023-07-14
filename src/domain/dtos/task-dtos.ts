import { Task } from './../entities/task';
export type createTaskDTO = {
    id: number,
    description: string
}

export type removeTaskDTO = {
    id: number
}

export type updateTaskDTO = {
    id: number,
    new_description: string
}

export type listTasksResponseDTO = {
    result: Task[]
}