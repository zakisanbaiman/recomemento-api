/*
  Warnings:

  - You are about to drop the column `type` on the `Book` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Book" ("author", "description", "genre", "id", "purpose", "title") SELECT "author", "description", "genre", "id", "purpose", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
