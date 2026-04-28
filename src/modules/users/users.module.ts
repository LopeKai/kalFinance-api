import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/shared/database/database.module';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

// Módulo Eles organizam e encapsulam funcionalidades, agrupando controllers, services e outros provedores relacionados em unidades coesas e reutilizáveis.

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})

export class UsersModule { }
