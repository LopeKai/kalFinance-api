import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import type { Request } from 'express';
import { AuthGuard } from '../auth/auth.guard';

// Requisições HTTP, validação, autenticação, autorização
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/me')
  me(@Req() request: any) {
    return this.usersService.getUserById('userid');
  }
}


