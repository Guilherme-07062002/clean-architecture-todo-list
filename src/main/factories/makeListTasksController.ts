import { MongoTaskRepository } from "../../infra/repositories/mongo/mongo-task-repository";
import { ListTasksUseCase } from "../../application";
import { Env } from "../../index";
import { ListTasksController } from "../../interface/controllers/list-tasks-controller";
import { MakeController } from "../ports/make-controller";

export const makeListTasksController = (): MakeController => {
    return (env: Env) => {
        const repo = new MongoTaskRepository(env.URL)
        const usecase = new ListTasksUseCase(repo)
        return new ListTasksController(usecase)
    }
}