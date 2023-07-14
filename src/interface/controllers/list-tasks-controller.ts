import { Controller, Request, Response, UseCase } from '@/domain/ports';
import { ok } from '../adapters';
export class ListTasksController implements Controller {
    constructor(
        private readonly useCase: UseCase
    ) { }

    async handle(request: Request<unknown, unknown, unknown>): Promise<Response> {
        const res = await this.useCase.execute({})
        return ok(res)
    }
}