import { Injectable } from '@nestjs/common';

// Regra de negócio
@Injectable()
export class UsersService {
    getUserById(userId: string) {
        return { userId }
        // Implementação para buscar usuário por ID
    }
}
1