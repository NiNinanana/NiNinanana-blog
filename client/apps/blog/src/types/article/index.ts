import { Timestamp } from "firebase/firestore";

export interface Article {
  title: string;
  imageUrl: string;
  category: string;
  tags: string[];
  contents: string;
  summary: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
