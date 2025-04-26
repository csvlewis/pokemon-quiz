"use client";

// import Image from "next/image";
// import styles from "./page.module.css";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import CreateQuizQuestions from "@/features/questions/components/CreateQuizQuestions";
import { useEffect, useState } from "react";
import { Option } from "@/features/questions/components/CreateQuizQuestions";

type Question = {
  imageUrl: string;
  question: string;
  options: Option[];
};

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([
    { imageUrl: "", question: "", options: [] },
  ] as Question[]);
  const [selectedAnswer, setSelectedAnswer] = useState<Option>({} as Option);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);
  const isSubmitDisabled = selectedAnswer.text === undefined;

  useEffect(() => {
    CreateQuizQuestions(5).then((response) => {
      setQuestions(response);
    });
  }, []);

  const handleOptionClick = (option: Option) => {
    if (displayAnswer) return;
    if (option === selectedAnswer) {
      setSelectedAnswer({} as Option);
    } else {
      setSelectedAnswer(option);
    }
  };

  const incrementQuestion = () => {
    if (currentQuestion >= questions.length) return;
    setCurrentQuestion(currentQuestion + 1);
    setDisplayAnswer(false);
    setSelectedAnswer({} as Option);
  };

  const handleSubmit = () => {
    if (displayAnswer) {
      incrementQuestion();
      return;
    }
    setDisplayAnswer(true);
  };

  const setButtonColor = (option: Option) => {
    if (displayAnswer === false) {
      return "primary";
    }
    if (!option.isCorrect) {
      return "error";
    } else {
      return "success";
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Paper>
        <Stack
          justifyContent={"center"}
          alignItems="center"
          spacing={2}
          sx={{ margin: 2 }}
        >
          <Typography>
            Question {currentQuestion}/{questions.length}
          </Typography>
          <Typography>{questions[currentQuestion - 1].question}</Typography>
          <Stack spacing={2} direction={"row"}>
            {questions[currentQuestion - 1]?.options.map((option, index) => (
              <Button
                color={setButtonColor(option)}
                variant={
                  option.text === selectedAnswer.text ? "contained" : "outlined"
                }
                onClick={() => handleOptionClick(option)}
                key={index}
              >
                <Typography>{option.text}</Typography>
              </Button>
            ))}
          </Stack>
          <Button
            disabled={isSubmitDisabled}
            variant="contained"
            onClick={handleSubmit}
          >
            <Typography>
              {displayAnswer ? "Next Question" : "Submit"}
            </Typography>
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
}
