import { IsEnum } from 'class-validator';
import { Roles } from '../enums/roles.enum';

export class RoleDto {
  @IsEnum(Roles)
  readonly role: Roles;
}
