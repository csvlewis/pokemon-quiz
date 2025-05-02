export const filterAndRandomSelect = (
  dataArray: string[],
  selectedData: string[],
  amount: number
): string[] => {
  return dataArray
    .filter((data) => !selectedData.includes(data))
    .sort(() => 0.5 - Math.random())
    .slice(0, amount);
};
