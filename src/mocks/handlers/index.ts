import boardHandler from "./board";
import userHandlers from "./user";

const handlers = [...userHandlers, ...boardHandler];

export default handlers;
