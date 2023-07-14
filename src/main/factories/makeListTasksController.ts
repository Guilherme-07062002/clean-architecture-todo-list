import { ListTasksUseCase } from "@/application";
import { Env } from "@/index";
import { SqliteTaskRepository } from "@/infra/repositories/sqlite3/sqlite-task-repository";
import { ListTasksController } from "@/interface/controllers/list-tasks-controller";
import { MakeController } from "../ports/make-controller";

export const makeListTasksController = (): MakeController => {
    return (env: Env) => {
        const repo = new SqliteTaskRepository(env.SQLITE_DB_NAME, env.SQLITE_USER_NAME, env.SQLITE_PASSWORD)
        const usecase = new ListTasksUseCase(repo)
        return new ListTasksController(usecase)
    }
}