import { Paper, Stack, Typography } from "@mui/material";
import { useQuizContext } from "@/features/context/components/QuizContextProvider";
import { Options } from "@/features/quiz-ui/components/Options";
import { Submit } from "@/features/quiz-ui/components/Submit";

export function Main(): React.ReactNode {
  const { currentQuestion, questions, quizInProgress } = useQuizContext();

  if (quizInProgress)
    return (
      <Paper>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ margin: 2 }}
        >
          <Typography>
            Question {currentQuestion}/{questions.length}
          </Typography>
          <Typography>{questions[currentQuestion - 1]?.question}</Typography>
          <Options />
          <Submit />
        </Stack>
      </Paper>
    );
}
