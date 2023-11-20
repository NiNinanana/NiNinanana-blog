import { Timestamp } from "firebase/firestore";

export interface Blog {
  title: string;
  category: string;
  tags: string[];
  contents: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
