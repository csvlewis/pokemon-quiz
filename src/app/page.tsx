"use client";

import { Grid } from "@mui/material";

import { Settings } from "@/features/settings/components/Settings";
import { Main } from "@/features/quiz/components/Main";
import { Results } from "@/features/quiz/components/Results";

export default function Home() {
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
