import { createTaskDTO, removeTaskDTO, updateTaskDTO } from "@/domain/dtos";
import { Task } from "@/domain/entities";
import { TaskRepository } from "@/domain/repositories/task-repository";
import mongoose, { Model } from "mongoose";

interface TaskDocument extends mongoose.Document {
  id?: number;
  description: string;
}

const TaskSchema = new mongoose.Schema<TaskDocument>({
  id: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
});

export class MongoTaskRepository implements TaskRepository {
  private taskModel: Model<TaskDocument>;

  constructor(url: string) {
    // "mongodb://localhost/bdTask"
    mongoose.connect(url);

    this.taskModel = mongoose.model<TaskDocument>("Task", TaskSchema);
  }

  async create(data: createTaskDTO): Promise<Task | Object> {
    const task = await this.taskModel.create(data);
    if (!task) return { status: false };
    return { status: true };
  }

  async remove(data: removeTaskDTO): Promise<boolean> {
    const result = this.taskModel.deleteOne({ id: data.id });
    if (!result) return false;
    return true;
  }

  async update(data: updateTaskDTO): Promise<boolean> {
    return true;
  }

  // async list(): Promise<Task[]> {
  //     return Task[]
  // }
}
