import { Question } from "@/types/Question";

export function setSubmitText(
  currentQuestion: number,
  displayAnswer: boolean,
  questions: Question[]
): string {
  let text: string = "Submit";

  if (displayAnswer) {
    if (currentQuestion >= questions.length) {
      text = "See Results";
    } else text = "Next Question";
  }

  return text;
}
