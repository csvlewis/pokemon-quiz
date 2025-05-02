import { Button, Paper, Stack, Typography } from "@mui/material";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function Results(): React.ReactNode {
  const { correctAnswers, questions, quizInProgress, resetQuiz, showResults } =
    useQuizContext();

  if (!quizInProgress && showResults)
    return (
      <Paper>
        <Stack alignItems="center" spacing={2} sx={{ margin: 2 }}>
          <Typography>
            You got {correctAnswers} out of {questions.length} answers correct
          </Typography>
          <Typography>Would you like to play again?</Typography>
          <Button variant="contained" onClick={() => resetQuiz()}>
            <Typography>Create New Quiz</Typography>
          </Button>
        </Stack>
      </Paper>
    );
}
