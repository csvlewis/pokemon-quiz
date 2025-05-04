import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { questionTypes } from "@/config/questionTypes";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { useHandleToggle } from "@/features/settings/hooks/useHandleToggle";

export function QuestionTypeSelect(): React.ReactNode {
  const { selectedQuestionTypes } = useQuizContext();
  const handleToggle: (value: string) => void = useHandleToggle();

  return (
    <Stack alignItems="center">
      <Typography>Select at least one question type for your quiz:</Typography>
      <List sx={{ width: "100%" }}>
        {questionTypes.map((questionType, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleToggle(questionType.name)}
                dense
                disableRipple
              >
                <ListItemIcon>
                  <Checkbox
                    checked={selectedQuestionTypes.includes(questionType.name)}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary={`${questionType.name} - ${questionType.description}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
