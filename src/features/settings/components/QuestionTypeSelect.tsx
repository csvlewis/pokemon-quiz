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

import { questionCategories } from "@/config/questionCategories";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { useHandleToggle } from "@/features/settings/hooks/useHandleToggle";

export function QuestionTypeSelect(): React.ReactNode {
  const { selectedQuestionTypes } = useQuizContext();
  const handleToggle: (value: string) => void = useHandleToggle();

  return (
    <Stack alignItems="center">
      <Typography>Select at least one question type for your quiz:</Typography>
      <List sx={{ width: "100%" }}>
        {questionCategories.map((questionCategory, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleToggle(questionCategory.name)}
                dense
                disableRipple
              >
                <ListItemIcon>
                  <Checkbox
                    checked={selectedQuestionTypes.includes(
                      questionCategory.name
                    )}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary={`${questionCategory.name} - ${questionCategory.description}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
