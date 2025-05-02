import { OverridableStringUnion } from "@mui/types";
import { Button, Stack, Typography } from "@mui/material";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { useHandleOptionClick } from "@/features/quiz/hooks/useHandleOptionClick";
import { useSetOptionColor } from "@/features/quiz/hooks/useSetOptionColor";
import { Option } from "@/types/Option";

export function Options(): React.ReactNode {
  const { currentQuestion, questions, quizInProgress, selectedAnswer } =
    useQuizContext();

  const setOptionColor: (
    option: Option
  ) => OverridableStringUnion<"error" | "primary" | "success"> =
    useSetOptionColor();
  const handleOptionClick: (option: Option) => void = useHandleOptionClick();

  if (quizInProgress)
    return (
      <Stack spacing={2} direction={"row"}>
        {questions[currentQuestion - 1]?.options.map((option, index) => (
          <Button
            color={setOptionColor(option)}
            variant={
              option.text === selectedAnswer.text ? "contained" : "outlined"
            }
            onClick={() => handleOptionClick(option)}
            key={index}
          >
            <Typography>{option.text}</Typography>
          </Button>
        ))}
      </Stack>
    );
}
