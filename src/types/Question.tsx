import { Option } from "./Option";

export type Question = {
  imageUrl: string;
  question: string;
  options: Option[];
};
