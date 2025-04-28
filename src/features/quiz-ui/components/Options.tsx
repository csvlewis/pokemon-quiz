import { Button, Stack, Typography } from "@mui/material";
import { useQuizContext } from "@/features/context/components/QuizContextProvider";
import { setOptionColor } from "@/features/quiz-ui/utils/setOptionColor";
import { handleOptionClick } from "@/features/quiz-ui/utils/handleOptionClick";

export function Options(): React.ReactNode {
  const {
    currentQuestion,
    displayAnswer,
    questions,
    quizInProgress,
    selectedAnswer,
    setSelectedAnswer,
  } = useQuizContext();

  if (quizInProgress)
    return (
      <Stack spacing={2} direction={"row"}>
        {questions[currentQuestion - 1]?.options.map((option, index) => (
          <Button
            color={setOptionColor(option, displayAnswer)}
            variant={
              option.text === selectedAnswer.text ? "contained" : "outlined"
            }
            onClick={() =>
              handleOptionClick(
                option,
                displayAnswer,
                selectedAnswer,
                setSelectedAnswer
              )
            }
            key={index}
          >
            <Typography>{option.text}</Typography>
          </Button>
        ))}
      </Stack>
    );
}
