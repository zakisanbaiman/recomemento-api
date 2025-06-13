import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { Request, Response } from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("API")
    .setDescription("API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  // OpenAPI JSONを返すエンドポイントを追加
  app.use("/api-json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(document);
  });

  app.enableCors();
  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
