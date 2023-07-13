import { SqliteTaskRepository } from './../../infra/repositories/sqlite3/sqlite-task-repository';
import { CreateTaskController } from './../../interface/controllers/create-task-controller';
import { CreateTaskUseCase } from './../../application/create-task-usecase';
import { MakeController } from './../ports/make-controller';
import { Env } from '@/index';

export const makeCreateTaskController = (): MakeController => {
    return (env: Env) => {
        const repo = new SqliteTaskRepository(env.SQLITE_DB_NAME, env.SQLITE_USER_NAME, env.SQLITE_PASSWORD)
        const usecase = new CreateTaskUseCase(repo)
        return new CreateTaskController(usecase);
    }
}