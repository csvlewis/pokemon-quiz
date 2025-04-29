import { Paper, Stack } from "@mui/material";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { Question } from "@/features/quiz-ui/components/Question";
import { Options } from "@/features/quiz-ui/components/Options";
import { Submit } from "@/features/quiz-ui/components/Submit";

export function Main(): React.ReactNode {
  const { quizInProgress } = useQuizContext();

  if (quizInProgress)
    return (
      <Paper>
        <Stack alignItems="center" spacing={2} sx={{ margin: "16px" }}>
          <Question />
          <Options />
          <Submit />
        </Stack>
      </Paper>
    );
}
