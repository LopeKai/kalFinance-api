import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

// Regra de negócio
@Injectable()
export class UsersService {

    constructor(private readonly usersRepo: UsersRepository) { }

    getUserById(userId: string) {
        return this.usersRepo.findUnique({
            where: { id: userId },
            select: {
                name: true,
                email: true,
            }
        }) // Implementação para buscar usuário por ID
    }
};
1