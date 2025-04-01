import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { AdminRoles } from '../enum/admin.enums';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (!req.user?.role || req.user?.role !== AdminRoles.ADMIN) {
      throw new ForbiddenException('Forbidden user');
    }
    return true;
  }
}
