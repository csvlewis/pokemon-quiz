import { OverridableStringUnion } from "@mui/types";
import { Option } from "@/types/Option";

export function setOptionColor(
  option: Option,
  displayAnswer: boolean
): OverridableStringUnion<"error" | "primary" | "success"> {
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
}
