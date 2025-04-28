import {
  Button,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useQuizContext } from "@/features/context/components/QuizContextProvider";

export function Settings(): React.ReactNode {
  const { showResults, quizInProgress, setQuizInProgress, setQuizLength } =
    useQuizContext();

  if (!quizInProgress && !showResults)
    return (
      <Paper>
        <Stack alignItems="center" spacing={2} sx={{ margin: 2 }}>
          <Typography>Welcome to the Pokemon Quiz!</Typography>
          <Typography>How long would you like your quiz to be?:</Typography>
          <Select
            defaultValue={5}
            onChange={(e) => setQuizLength(Number(e.target.value))}
          >
            <MenuItem value={5}>Short (5 questions)</MenuItem>
            <MenuItem value={10}>Medium (10 questions)</MenuItem>
            <MenuItem value={20}>Long (20 questions)</MenuItem>
          </Select>

          <Button variant="contained" onClick={() => setQuizInProgress(true)}>
            <Typography>Start Quiz</Typography>
          </Button>
        </Stack>
      </Paper>
    );
}
