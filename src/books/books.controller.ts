import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import type { Book } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
