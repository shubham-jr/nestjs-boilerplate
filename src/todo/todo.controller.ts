import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TODO } from 'common/constants/common.constant';
import { SetTaskStatus } from './decorator/task-status.decorator';
import { CreateTodoDto } from './dto/create-todo.dto';
import { queryTaskDto } from './dto/query-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(@Query() query: queryTaskDto) {
    return this.todoService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @SetTaskStatus(TODO.IN_PROGRESS)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @SetTaskStatus(TODO.DELETED)
  @Patch('/recover/:id')
  recover(@Param('id') id: string) {
    return this.todoService.recover(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
