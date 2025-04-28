import { Option } from "@/types/Option";

export function handleOptionClick(
  option: Option,
  displayAnswer: boolean,
  selectedAnswer: Option,
  setSelectedAnswer: (option: Option) => void
) {
  if (displayAnswer) return;
  if (option === selectedAnswer) {
    setSelectedAnswer({});
  } else {
    setSelectedAnswer(option);
  }
}
