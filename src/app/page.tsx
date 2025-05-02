"use client";

import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { CreateQuestions } from "@/features/questions/components/CreateQuestions";
import { Results } from "@/features/results/components/Results";
import { Settings } from "@/features/settings/components/Settings";
import { Main } from "@/features/quiz-ui/components/Main";

export default function Home() {
  const { setQuestions, quizLength, showResults } = useQuizContext();

  useEffect(() => {
    CreateQuestions(quizLength).then((response) => {
      setQuestions(response);
    });
  }, [quizLength, showResults, setQuestions]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Settings />
      <Main />
      <Results />
    </Grid>
  );
}
