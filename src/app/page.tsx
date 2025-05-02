"use client";

import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { CreateQuestions } from "@/features/questions/components/CreateQuestions";
import { Settings } from "@/features/quiz/components/Settings";
import { Main } from "@/features/quiz/components/Main";
import { Results } from "@/features/quiz/components/Results";

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
