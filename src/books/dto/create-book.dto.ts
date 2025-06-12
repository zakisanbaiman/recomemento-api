import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  @ApiProperty({
    description: "The title of the book",
    example: "The Great Gatsby",
  })
  title: string;

  @ApiProperty({
    description: "The author of the book",
    example: "F. Scott Fitzgerald",
  })
  author: string;

  @ApiProperty({
    description: "The genre of the book",
    example: "Fiction",
  })
  genre: string;

  @ApiProperty({
    description: "The type of the book",
    example: "Novel",
  })
  type: string;

  @ApiProperty({
    description: "The purpose of the book",
    example: "Entertainment",
  })
  purpose: string;

  @ApiProperty({
    description: "The description of the book",
    example:
      "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
  })
  description: string;
}
