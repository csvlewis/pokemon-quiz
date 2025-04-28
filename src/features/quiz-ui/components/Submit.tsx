import { Button, Typography } from "@mui/material";
import { useQuizContext } from "@/features/context/components/QuizContextProvider";
import { setSubmitText } from "@/features/quiz-ui/utils/setSubmitText";
import { useHandleSubmit } from "@/features/quiz-ui/hooks/useHandleSubmit";

export function Submit(): React.ReactNode {
  const {
    currentQuestion,
    displayAnswer,
    questions,
    quizInProgress,
    selectedAnswer,
  } = useQuizContext();

  const handleSubmit = useHandleSubmit();

  if (quizInProgress)
    return (
      <Button
        disabled={selectedAnswer.text === undefined}
        variant="contained"
        onClick={() => handleSubmit(selectedAnswer)}
      >
        <Typography>
          {setSubmitText(currentQuestion, displayAnswer, questions)}
        </Typography>
      </Button>
    );
}
