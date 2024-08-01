import { HttpResponse, http } from "msw";
import { CommentType } from "../../types/board";

const CommentsGenerator = (author: string, date: string, comment: string, reply?: CommentType[]) => {
  return { author: author, date: date, comment: comment, reply: reply };
};

const BOARD_DATA = [
  {
    isLive: true,
    title: "같이 게임 하실분",
    author: "PodoLove#LOVE",
    category: "팀 구하기",
    date: "2분 전",
    maxPeople: 5,
    currentPeople: 1,
    id: 0,
    comments: [
      CommentsGenerator("PodoLove", "10분 전", "ㅎㅇㅎㅇ"),
      CommentsGenerator("PodoLove", "5분 전", "Comment Test1", [CommentsGenerator("Faker", "1분전", "Reply Test1")]),
      CommentsGenerator("PodoLove", "2분 전", "Comment Test2", [
        CommentsGenerator("Chovy", "10분전", "Reply Test2"),
        CommentsGenerator("Chovy", "10분전", "Reply Test3"),
      ]),
    ],
  },
  {
    isLive: false,
    title: "요즘 롤 망한듯",
    author: "Faker#kr1",
    category: "잡담",
    date: "1시간 전",
    maxPeople: 5,
    currentPeople: 1,
    id: 1,
    comments: [
      CommentsGenerator("PodoLove", "2분 전", "Comment Test2", [
        CommentsGenerator("Chovy", "10분전", "Reply Test2"),
        CommentsGenerator("Chovy", "10분전", "Reply Test3"),
      ]),
    ],
  },
  {
    isLive: true,
    title: "듀오구합니다",
    author: "Chovy#kr1",
    category: "팀 구하기",
    date: "10분 전",
    maxPeople: 2,
    currentPeople: 1,
    id: 2,
    comments: [
      CommentsGenerator("PodoLove", "10분 전", "ㅎㅇㅎㅇ"),
      CommentsGenerator("PodoLove", "5분 전", "Comment Test1", [CommentsGenerator("Faker", "1분전", "Reply Test1")]),
      CommentsGenerator("PodoLove", "2분 전", "Comment Test2", [CommentsGenerator("Chovy", "10분전", "Reply Test2")]),
    ],
  },
];

const boardHandler = [
  http.get("/mock/board/:category", ({ params }) => {
    const { category } = params;
    console.log(category);
    const filteredBoard = BOARD_DATA.filter((item) => item.category === category);
    console.log(filteredBoard);
    return HttpResponse.json(category === "전체" ? BOARD_DATA : filteredBoard);
  }),
  http.get("/mock/board/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json(BOARD_DATA[Number(id)]);
  }),
  http.post("/mock/comment/add/:id", async ({ request, params }) => {
    const { id } = params;
    const comment = await request.json();
    BOARD_DATA[Number(id)].comments.push(comment as any);
    return new HttpResponse(null, { status: 200 });
  }),
];

export default boardHandler;
