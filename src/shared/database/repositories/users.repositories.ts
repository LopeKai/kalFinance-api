import { Injectable } from "@nestjs/common";
import { type Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable() // Ele encapsula todas as operações de banco de dados relacionadas ao modelo User. Em vez de chamar o Prisma diretamente nos services, você chama o repository, que delega para o Prisma
export class UsersRepository {
    constructor(private readonly prismaService: PrismaService) { }

    create(createDto: Prisma.UserCreateArgs) {
        return this.prismaService.user.create(createDto);
    }

    findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
        return this.prismaService.user.findUnique(findUniqueDto);
    }
}