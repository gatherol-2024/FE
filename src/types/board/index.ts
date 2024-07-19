export interface CommentType {
  author: string;
  date: string;
  comment: string;
  reply?: CommentType[];
}

export interface BoardType {
  isLive: boolean;
  title: string;
  author: string;
  category: string;
  date: string;
  maxPeople: number;
  currentPeople: number;
  id: number;
  comments?: CommentType[];
}
