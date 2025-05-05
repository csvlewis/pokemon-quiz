import { Button, Paper, Stack, Typography } from "@mui/material";

import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function Results(): React.ReactNode {
  const { correctAnswers, questions, quizInProgress, resetQuiz, showResults } =
    useQuizContext();

  if (!quizInProgress && showResults)
    return (
      <Paper>
        <Stack alignItems="center" spacing={4} sx={{ margin: "48px" }}>
          <Typography>
            You got {correctAnswers} out of {questions.length} answers correct
          </Typography>
          <Typography>Thanks for playing!</Typography>
          <Typography>Would you like to start a new quiz?</Typography>
          <Button variant="contained" onClick={() => resetQuiz()}>
            <Typography>Create New Quiz</Typography>
          </Button>
        </Stack>
      </Paper>
    );
}
