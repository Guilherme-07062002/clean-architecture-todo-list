import { UpdateTaskController } from './../../interface/controllers';
import { UpdateTaskUsecase } from './../../application';
import { Env } from "@/index";
import { MakeController } from "../ports/make-controller";
import { MongoTaskRepository } from '@/infra/repositories/mongo/mongo-task-repository';

export const makeUpdateTaskController = (): MakeController => {
    return (env: Env) => {
        const repo = new MongoTaskRepository(env.URL)
        const usecase = new UpdateTaskUsecase(repo)
        return new UpdateTaskController(usecase)
    }
}