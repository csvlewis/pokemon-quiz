import { PokemonData } from "@/types/PokemonData";
import { Question } from "@/types/Question";
import { QuestionCategory } from "@/types/QuestionCategory";
import { questionCategories } from "@/config/questionCategories";
import { randomizeArray } from "@/utils/randomizeArray";

export const generateQuestion = (
  pokemonData: PokemonData,
  selectedQuestionTypes: string[]
): Question => {
  const filteredQuestionTypes: QuestionCategory[] = questionCategories.filter(
    (questionCategory) => selectedQuestionTypes.includes(questionCategory.name)
  );

  if (filteredQuestionTypes.length === 0) return {} as Question;

  const question: Question = randomizeArray(
    filteredQuestionTypes
  )[0].generateQuestion(pokemonData);

  return question;
};
