import { Box, Stack, Typography } from "@mui/material";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function Question(): React.ReactNode {
  const { currentQuestion, questions, quizInProgress } = useQuizContext();

  if (quizInProgress)
    return (
      <Stack alignItems="center" spacing={2}>
        <Typography>
          Question {currentQuestion}/{questions.length}
        </Typography>
        <Typography>{questions[currentQuestion - 1]?.text}</Typography>
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 250 },
            maxWidth: { xs: 250 },
          }}
          src={questions[currentQuestion - 1]?.imageUrl}
        />
      </Stack>
    );
}
