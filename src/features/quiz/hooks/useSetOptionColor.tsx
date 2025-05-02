import { OverridableStringUnion } from "@mui/types";
import { useQuizContext } from "@/features/context/hooks/useQuizContext";
import { Option } from "@/types/Option";

export function useSetOptionColor(): (
  option: Option
) => OverridableStringUnion<"error" | "primary" | "success"> {
  const { displayAnswer } = useQuizContext();

  return (option: Option) => {
    let color: OverridableStringUnion<"error" | "primary" | "success"> =
      "primary";

    if (displayAnswer) {
      if (!option.isCorrect) {
        color = "error";
      } else {
        color = "success";
      }
    }

    return color;
  };
}
