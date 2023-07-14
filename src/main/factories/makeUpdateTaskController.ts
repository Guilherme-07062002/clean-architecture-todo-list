import { UpdateTaskController } from './../../interface/controllers';
import { UpdateTaskUsecase } from './../../application';
import { Env } from "@/index";
import { SqliteTaskRepository } from "../../infra/repositories/sqlite3/sqlite-task-repository";
import { MakeController } from "../ports/make-controller";

export const makeUpdateTaskController = (): MakeController => {
    return (env: Env) => {
        const repo = new SqliteTaskRepository(env.SQLITE_DB_NAME, env.SQLITE_USER_NAME, env.SQLITE_PASSWORD)
        const usecase = new UpdateTaskUsecase(repo)
        return new UpdateTaskController(usecase)
    }
}