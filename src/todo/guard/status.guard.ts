import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TODO } from 'common/constants/common.constant';
import { STATUS_KEY } from 'todo/decorator/task-status.decorator';
import { TodoService } from 'todo/todo.service';

@Injectable()
export class StatusGuard implements CanActivate {
  constructor(
    private readonly todoService: TodoService,
    private readonly reflect: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isStatus = this.reflect.getAllAndOverride<typeof TODO>(STATUS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!isStatus) return true;

    const request = context.switchToHttp().getRequest();

    const id: string = request.params['id'];

    const todo = await this.todoService.findOne(id);
    if (todo.status === isStatus) return true;

    request.todo = todo;

    throw new HttpException(
      `This route is only for ${isStatus} todo`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
