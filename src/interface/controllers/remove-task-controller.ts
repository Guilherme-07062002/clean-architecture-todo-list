import { removeTaskDTO } from "@/domain/dtos"
import { Controller, Request, Response, UseCase } from "@/domain/ports"
import { ok } from '../adapters';

namespace Request {
    export type Query = {
        id: number
    }
}

export class RemoveTaskController implements Controller {
    constructor(
        private readonly useCase: UseCase
    ) { }

    async handle(request: Request<unknown, unknown, Request.Query>): Promise<Response> {
        const query = request.query
        const response = await this.useCase.execute(query as removeTaskDTO)
        return ok(response)
    }
}