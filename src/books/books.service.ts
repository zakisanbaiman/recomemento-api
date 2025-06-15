import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import type { Book } from "@prisma/client";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { RecommendBookDto } from "./dto/recommend-book.dto";

@Injectable()
export class BooksService implements OnModuleInit, OnModuleDestroy {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return await this.prisma.book.create({
      data: createBookDto,
    });
  }

  async findAll(): Promise<Book[]> {
    return await this.prisma.book.findMany();
  }

  async findOne(id: number): Promise<Book | null> {
    return await this.prisma.book.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    return await this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  async remove(id: number): Promise<Book> {
    return await this.prisma.book.delete({
      where: { id },
    });
  }

  async recommend(dto: RecommendBookDto): Promise<Book | null> {
    return await this.prisma.book.findFirst({
      where: {
        genre: dto.genre,
        type: dto.type,
        purpose: dto.purpose,
      },
    });
  }
}
