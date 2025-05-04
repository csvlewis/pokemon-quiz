import { MenuItem, Select, Stack, Typography } from "@mui/material";

import { useQuizContext } from "@/features/context/hooks/useQuizContext";

export function QuizLengthSelect(): React.ReactNode {
  const { setQuizLength } = useQuizContext();

  const quizLengthOptions: { value: number; label: string }[] = [
    { value: 5, label: "Short (5 questions)" },
    { value: 10, label: "Medium (10 questions)" },
    { value: 20, label: "Long (20 questions)" },
  ];

  return (
    <Stack spacing={2} alignItems="center">
      <Typography>
        How many questions long would you like your quiz to be?:
      </Typography>
      <Select
        defaultValue={5}
        onChange={(e) => setQuizLength(Number(e.target.value))}
        sx={{ maxWidth: "250px" }}
      >
        {quizLengthOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
