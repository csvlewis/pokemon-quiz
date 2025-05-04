import { Button, Paper, Stack, Typography } from "@mui/material";

import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { QuestionTypeSelect } from "@/features/settings/components/QuestionTypeSelect";
import { QuizLengthSelect } from "@/features/settings/components/QuizLengthSelect";

export function Settings(): React.ReactNode {
  const {
    selectedQuestionTypes,
    showResults,
    quizInProgress,
    setQuizInProgress,
  } = useQuizContext();

  if (!quizInProgress && !showResults)
    return (
      <Paper>
        <Stack alignItems="center" spacing={4} sx={{ margin: "48px" }}>
          <Typography variant="h4">Welcome to the Pokémon Quiz!</Typography>
          <QuizLengthSelect />
          <QuestionTypeSelect />
          <Button
            disabled={selectedQuestionTypes.length === 0}
            variant="contained"
            onClick={() => setQuizInProgress(true)}
          >
            <Typography>Start Quiz</Typography>
          </Button>
        </Stack>
      </Paper>
    );
}
