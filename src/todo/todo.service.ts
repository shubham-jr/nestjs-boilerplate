import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TODO } from 'common/constants/common.constant';
import { catchAsync } from 'common/decoratos/helper/catch-async.decorator';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { queryTaskDto } from './dto/query-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private readonly repo: Model<Todo>) {}

  @catchAsync()
  async create(createTodoDto: CreateTodoDto) {
    return await this.repo.create(createTodoDto);
  }

  @catchAsync()
  async findAll(query: queryTaskDto) {
    const tasks = await this.repo.find(query);

    return tasks;
  }

  @catchAsync()
  async findOne(id: string) {
    return await this.repo.findById(id);
  }

  @catchAsync()
  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.repo.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }

  @catchAsync()
  async remove(id: string) {
    const todo = await this.repo.findById(id);
    const body = { status: TODO.DELETED, isPastStatus: todo.status };
    return await this.repo.findByIdAndUpdate(id, body, { new: true });
  }

  @catchAsync()
  async recover(id: string) {
    const todo = await this.repo.findById(id).select('pastStatus');
    const body = { status: todo.pastStatus };
    return await this.repo.findByIdAndUpdate(id, body, { new: true });
  }
}
