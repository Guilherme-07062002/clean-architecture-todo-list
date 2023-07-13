import { RemoveTaskUseCase } from "@/application";
import { Env } from "@/index";
import { SqliteTaskRepository } from "@/infra/repositories/sqlite3/sqlite-task-repository";
import { RemoveTaskController } from "@/interface/controllers";
import { MakeController } from "../ports/make-controller";

export const makeRemoveTaskController = (): MakeController => {
    return (env: Env) => {
        const repo = new SqliteTaskRepository(env.SQLITE_DB_NAME, env.SQLITE_USER_NAME, env.SQLITE_PASSWORD)
        const usecase = new RemoveTaskUseCase(repo)
        return new RemoveTaskController(usecase)
    }
}