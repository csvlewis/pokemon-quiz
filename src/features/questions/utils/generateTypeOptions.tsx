import { Option } from "@/types/Option";
import { capitalize } from "@/utils/capitalize";
import { randomizeArray } from "@/utils/randomizeArray";

export const generateTypeOptions = (
  selectedTypes: string[],
  otherTypes: string[]
): Option[] => {
  if (selectedTypes.length === 1) {
    // if the pokemon has only one type
    const wrongOptions = otherTypes.map((type: string) => {
      return { text: type, isCorrect: false };
    });
    return randomizeArray([
      { text: selectedTypes[0], isCorrect: true },
      ...wrongOptions,
    ]);
  }

  // if the pokemon has two types
  const answer: string = selectedTypes.join(" and ");
  const wrongOptions: Option[] = otherTypes.map((type: string): Option => {
    const randomIndex = Math.round(Math.random());
    const firstType = randomIndex === 0 ? type : selectedTypes[randomIndex];
    const secondType = randomIndex === 0 ? selectedTypes[randomIndex] : type;
    return {
      text: `${capitalize(firstType)} and ${capitalize(secondType)}`,
      isCorrect: false,
    };
  });

  return randomizeArray([{ text: answer, isCorrect: true }, ...wrongOptions]);
};
