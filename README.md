# Recomemento API

本の推薦システムのバックエンドAPI

## 技術スタック

- NestJS
- Prisma
- SQLite
- TypeScript

## 機能

- 本のCRUD操作
- Swagger UIによるAPIドキュメント

## 開発環境のセットアップ

1. リポジトリのクローン
```bash
git clone [repository-url]
cd recomemento-api
```

2. 依存関係のインストール
```bash
npm install
```

3. 環境変数の設定
`.env`ファイルを作成し、以下の内容を追加：
```
DATABASE_URL="file:./prisma/dev.db"
```

4. データベースのセットアップ
```bash
npx prisma migrate dev
```

## 開発サーバーの起動

```bash
# 開発モード
npm run start:dev

# 本番モード
npm run start:prod
```

## APIドキュメント

Swagger UIにアクセスしてAPIドキュメントを確認できます：
```
http://localhost:3001/api
```

## データベース管理

Prisma Studioを使用してデータベースを管理できます：
```bash
npx prisma studio
```

## 利用可能なエンドポイント

### Books

- `POST /books` - 新しい本を作成
- `GET /books` - すべての本を取得
- `GET /books/:id` - 特定の本を取得
- `PATCH /books/:id` - 特定の本を更新
- `DELETE /books/:id` - 特定の本を削除

## ライセンス

MIT

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

