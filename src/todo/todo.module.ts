import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { TODO_SCHEMA } from 'common/constants/schema.constants';
import { StatusGuard } from './guard/status.guard';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [MongooseModule.forFeature([TODO_SCHEMA])],
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: APP_GUARD,
      useClass: StatusGuard,
    },
  ],
})
export class TodoModule {}
