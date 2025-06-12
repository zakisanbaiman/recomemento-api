import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto {
  @ApiProperty({
    description: "The title of the book",
    example: "The Great Gatsby",
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: "The author of the book",
    example: "F. Scott Fitzgerald",
    required: false,
  })
  author?: string;

  @ApiProperty({
    description: "The genre of the book",
    example: "Fiction",
    required: false,
  })
  genre?: string;

  @ApiProperty({
    description: "The type of the book",
    example: "Novel",
    required: false,
  })
  type?: string;

  @ApiProperty({
    description: "The purpose of the book",
    example: "Entertainment",
    required: false,
  })
  purpose?: string;

  @ApiProperty({
    description: "The description of the book",
    example:
      "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    required: false,
  })
  description?: string;
}
