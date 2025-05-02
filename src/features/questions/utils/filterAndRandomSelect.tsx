import { randomizeArray } from "@/utils/randomizeArray";

export const filterAndRandomSelect = (
  dataArray: string[],
  selectedData: string[],
  amount: number
): string[] => {
  return randomizeArray(
    dataArray.filter((data) => !selectedData.includes(data))
  ).slice(0, amount);
};
