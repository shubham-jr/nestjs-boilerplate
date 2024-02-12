import { SetMetadata } from '@nestjs/common';
import { NonEmptyArray } from '../../common/utils/array.util';
import { Roles as RolesEnum } from './../roles/enums/roles.enum';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: NonEmptyArray<RolesEnum>) =>
  SetMetadata(ROLES_KEY, roles);
