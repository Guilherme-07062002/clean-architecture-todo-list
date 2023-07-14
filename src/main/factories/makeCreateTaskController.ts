
import { CreateTaskController } from './../../interface/controllers/create-task-controller';
import { CreateTaskUseCase } from './../../application/create-task-usecase';
import { MakeController } from './../ports/make-controller';
import { Env } from '../../index';
import { MongoTaskRepository } from '../../infra/repositories/mongo/mongo-task-repository';

export const makeCreateTaskController = (): MakeController => {
    return (env: Env) => {
        const repo = new MongoTaskRepository(env.URL)
        const usecase = new CreateTaskUseCase(repo)
        return new CreateTaskController(usecase);
    }
}