import { Roles } from 'auth/roles/enums/roles.enum';

export interface RequestUser {
  readonly id: number;
  readonly role: Roles;
}
