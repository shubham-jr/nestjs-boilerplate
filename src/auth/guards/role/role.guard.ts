import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'auth/decorators/roles.decorator';
import { RequestUser } from 'auth/interfaces/request-user.interface';
import { Roles } from 'auth/roles/enums/roles.enum';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request['user'] as RequestUser;
    if (user.role === Roles.ADMIN) {
      return true;
    }
    const hasRequiredRoles = requiredRoles.some((role) => role === user.role);
    return hasRequiredRoles;
  }
}
