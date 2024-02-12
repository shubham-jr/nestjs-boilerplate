import { PartialType } from '@nestjs/mapped-types';
import { IsEnum } from 'class-validator';
import { TODO } from 'common/constants/common.constant';
import { IsOptionalString } from 'common/decoratos/validators/is-string-optional.decorator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptionalString()
  @IsEnum(TODO)
  status: typeof TODO;
}
