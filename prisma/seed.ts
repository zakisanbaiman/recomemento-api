import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: "ノルウェイの森",
        author: "村上春樹",
        genre: "小説",
        purpose: "entertainment",
        description: "青春と喪失を描いた名作。",
      },
      {
        title: "コンビニ人間",
        author: "村田沙耶香",
        genre: "小説",
        purpose: "entertainment",
        description: "現代社会の生きづらさを描く。",
      },
      {
        title: "嫌われる勇気",
        author: "岸見一郎・古賀史健",
        genre: "自己啓発",
        purpose: "learning",
        description: "アドラー心理学を分かりやすく解説。",
      },
      {
        title: "1Q84",
        author: "村上春樹",
        genre: "小説",
        purpose: "entertainment",
        description: "不思議な世界観の長編小説。",
      },
      {
        title: "ゼロ秒思考",
        author: "赤羽雄二",
        genre: "ビジネス",
        purpose: "learning",
        description: "思考力を鍛えるための実践的メソッド。",
      },
    ],
  });
}

main();
