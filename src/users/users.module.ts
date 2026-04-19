import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';

// Módulo Eles organizam e encapsulam funcionalidades, agrupando controllers, services e outros provedores relacionados em unidades coesas e reutilizáveis.

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})

export class UsersModule { }
