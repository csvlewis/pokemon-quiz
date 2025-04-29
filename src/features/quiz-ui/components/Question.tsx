import { Stack, Typography } from "@mui/material";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function Question(): React.ReactNode {
  const { currentQuestion, questions, quizInProgress } = useQuizContext();

  if (quizInProgress)
    return (
      <Stack alignItems="center" spacing={2}>
        <Typography>
          Question {currentQuestion}/{questions.length}
        </Typography>
        <Typography>{questions[currentQuestion - 1]?.question}</Typography>
      </Stack>
    );
}
