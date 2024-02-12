import { IsEnum } from 'class-validator';
import { TODO } from 'common/constants/common.constant';
import { IsOptionalString } from 'common/decoratos/validators/is-string-optional.decorator';

export class queryTaskDto {
  @IsOptionalString()
  @IsEnum(TODO)
  readonly status: typeof TODO;
}
