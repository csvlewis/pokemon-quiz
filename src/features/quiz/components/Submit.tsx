import { Button, Typography } from "@mui/material";

import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { useHandleSubmit } from "@/features/quiz/hooks/useHandleSubmit";
import { useSetSubmitText } from "@/features/quiz/hooks/useSetSubmitText";

export function Submit(): React.ReactNode {
  const { quizInProgress, selectedAnswer } = useQuizContext();
  const handleSubmit: () => void = useHandleSubmit();
  const setSubmitText: () => string = useSetSubmitText();

  if (quizInProgress)
    return (
      <Button
        disabled={selectedAnswer.text === undefined}
        variant="contained"
        onClick={() => handleSubmit()}
      >
        <Typography>{setSubmitText()}</Typography>
      </Button>
    );
}
