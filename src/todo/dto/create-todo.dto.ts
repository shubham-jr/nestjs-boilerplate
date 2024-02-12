import { IsValidString } from 'common/decoratos/validators/is-valid-string.decorator';
import { IsValidTodoDate } from 'common/decoratos/validators/valid-todo-date.decorator';

export class CreateTodoDto {
  @IsValidString()
  name: string;

  @IsValidString()
  description: string;

  @IsValidString()
  @IsValidTodoDate()
  date: string;
}
