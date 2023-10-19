import { ROLES_KEY } from '@application/@decorators/roles.decorator';
import { Role } from '@common/enums/role.enum';
import { GetUserProfileService } from '@domain/user/services/get-user-profile.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const rolesFilter = roles.filter((item) => item === request.user.role);

    return rolesFilter.length > 0;
  }
}
