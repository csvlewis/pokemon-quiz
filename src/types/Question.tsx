import { Option } from "./Option";

export type Question = {
  imageUrl: string;
  text: string;
  options: Option[];
};
