import { Injectable } from "@nestjs/common";
import { type Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable() // Ele encapsula todas as operações de banco de dados relacionadas ao modelo User. Em vez de chamar o Prisma diretamente nos services, você chama o repository, que delega para o Prisma
export class CategoriesRepository {
    constructor(private readonly prismaService: PrismaService) { }

    findMany(findUniqueDto: Prisma.CategoryFindManyArgs) {
        return this.prismaService.category.findMany(findUniqueDto);
    }
}