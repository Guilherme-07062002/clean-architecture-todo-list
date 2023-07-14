import { updateTaskDTO } from "@/domain/dtos";
import { Controller, Request, UseCase, Response } from "@/domain/ports";
import { badRequest, ok } from "../adapters";

namespace Request {
    export type Body = {
        new_description: string
    }
    export type Query = {
        id: number
    }
}

export class UpdateTaskController implements Controller {
    constructor(
        private readonly useCase: UseCase
    ) { }

    async handle(request: Request<Request.Body, unknown, Request.Query>): Promise<Response> {
        const body = request.body
        const query = request.query

        if (!body) return badRequest({ message: "Missing body" })
        if (!query) return badRequest({ message: "Missing query" })

        const response = await this.useCase.execute({ id: query.id, new_description: body.new_description } as updateTaskDTO)

        return ok(response)
    }
}