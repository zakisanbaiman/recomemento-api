import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import type { Book } from "@prisma/client";
import { RecommendBookDto } from "./dto/recommend-book.dto";

@ApiTags("books")
@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: "Create a new book" })
  @ApiResponse({
    status: 201,
    description: "The book has been successfully created.",
  })
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all books" })
  @ApiResponse({ status: 200, description: "Return all books." })
  async findAll(): Promise<Book[]> {
    return await this.booksService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a book by id" })
  @ApiResponse({ status: 200, description: "Return the book." })
  @ApiResponse({ status: 404, description: "Book not found." })
  async findOne(@Param("id") id: string): Promise<Book> {
    const book = await this.booksService.findOne(+id);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a book" })
  @ApiResponse({
    status: 200,
    description: "The book has been successfully updated.",
  })
  @ApiResponse({ status: 404, description: "Book not found." })
  async update(
    @Param("id") id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return await this.booksService.update(+id, updateBookDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a book" })
  @ApiResponse({
    status: 200,
    description: "The book has been successfully deleted.",
  })
  @ApiResponse({ status: 404, description: "Book not found." })
  async remove(@Param("id") id: string): Promise<Book> {
    return await this.booksService.remove(+id);
  }

  @Post("recommend")
  async recommend(@Body() dto: RecommendBookDto) {
    return this.booksService.recommend(dto);
  }
}
