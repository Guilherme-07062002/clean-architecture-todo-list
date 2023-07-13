import { Sequelize } from 'sequelize';
import { createTaskDTO, removeTaskDTO } from '@/domain/dtos';
import { Task } from './../../../domain/entities';
import { TaskRepository } from './../../../domain/repositories/task-repository';
import { DataTypes, Model } from 'sequelize';

class TaskModel extends Model { }

export class SqliteTaskRepository implements TaskRepository {
    private db: Sequelize

    constructor(dbName: string, dbUserName: string, sqlitePassword: string) {
        this.db = new Sequelize(dbName, dbUserName, sqlitePassword, {
            dialect: "sqlite",
            host: `${dbName}.sqlite`
        })
        this.db.sync()


        TaskModel.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize: this.db,
                modelName: "Task",
                timestamps: true
            }
        )


    }
    async create(data: createTaskDTO): Promise<Task | Object> {
        const TaskModel = this.db.model('Task')
        const task = await TaskModel.create(data)
        if (!task) return { status: false }
        return new Task(data.id, data.description)
    }

    async remove(data: removeTaskDTO): Promise<boolean> {
        const result = await TaskModel.destroy({
            where: {
                id: data.id
            }
        })
        if (result == 0) return false
        return true

    }
}