"use client";

// import Image from "next/image";
// import styles from "./page.module.css";
import {
  Button,
  Grid,
  Paper,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import CreateQuizQuestions from "@/features/questions/components/CreateQuizQuestions";
import { useEffect, useState } from "react";
import { Option } from "@/features/questions/components/CreateQuizQuestions";

type Question = {
  imageUrl: string;
  question: string;
  options: Option[];
};

export default function Home() {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [quizLength, setQuizLength] = useState<number>(5);
  const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Option>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);
  const isSubmitDisabled = selectedAnswer.text === undefined;

  useEffect(() => {
    CreateQuizQuestions(quizLength).then((response) => {
      setQuestions(response);
    });
  }, [quizLength]);

  const handleOptionClick = (option: Option) => {
    if (displayAnswer) return;
    if (option === selectedAnswer) {
      setSelectedAnswer({});
    } else {
      setSelectedAnswer(option);
    }
  };

  const resetQuiz = () => {
    setCorrectAnswers(0);
    setShowResults(false);
    setQuizInProgress(false);
    setQuestions([]);
    setSelectedAnswer({});
    setCurrentQuestion(1);
    setDisplayAnswer(false);
  };

  const incrementQuestion = () => {
    if (currentQuestion >= questions.length) {
      setQuizInProgress(false);
      setShowResults(true);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    setDisplayAnswer(false);
    setSelectedAnswer({});
  };

  const handleSubmit = (answer: Option) => {
    if (displayAnswer) return incrementQuestion();
    if (answer.isCorrect) setCorrectAnswers(correctAnswers + 1);
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

  const setButtonText = (displayAnswer: boolean) => {
    if (displayAnswer) {
      if (currentQuestion >= questions.length) {
        return "See Results";
      } else return "Next Question";
    } else {
      return "Submit";
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      {!quizInProgress ? (
        !showResults ? (
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

              <Button
                variant="contained"
                onClick={() => setQuizInProgress(true)}
              >
                <Typography>Start Quiz</Typography>
              </Button>
            </Stack>
          </Paper>
        ) : (
          <Paper>
            <Stack alignItems="center" spacing={2} sx={{ margin: 2 }}>
              <Typography>
                You got {correctAnswers} out of {questions.length} answers
                correct
              </Typography>
              <Typography>Would you like to play again?</Typography>
              <Button variant="contained" onClick={() => resetQuiz()}>
                <Typography>Create New Quiz</Typography>
              </Button>
            </Stack>
          </Paper>
        )
      ) : (
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
            <Stack spacing={2} direction={"row"}>
              {questions[currentQuestion - 1]?.options.map((option, index) => (
                <Button
                  color={setButtonColor(option)}
                  variant={
                    option.text === selectedAnswer.text
                      ? "contained"
                      : "outlined"
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
              onClick={() => handleSubmit(selectedAnswer)}
            >
              <Typography>{setButtonText(displayAnswer)}</Typography>
            </Button>
          </Stack>
        </Paper>
      )}
    </Grid>
  );
}
