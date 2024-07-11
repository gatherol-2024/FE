import { HttpResponse, http } from "msw";

const BOARD_DATA = [
  {
    isLive: true,
    title: "같이 게임 하실분",
    author: "PodoLove#LOVE",
    maxPeople: 5,
    currentPeople: 1,
  },
  {
    isLive: false,
    title: "요즘 롤 망한듯",
    author: "Faker#kr1",
    maxPeople: 5,
    currentPeople: 1,
  },
  {
    isLive: true,
    title: "듀오구합니다",
    author: "Chovy#kr1",
    maxPeople: 2,
    currentPeople: 1,
  },
];

const boardHandler = [http.get("/mock/board", () => HttpResponse.json(BOARD_DATA))];

export default boardHandler;
