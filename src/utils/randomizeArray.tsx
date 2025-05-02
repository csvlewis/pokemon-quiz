/* eslint-disable @typescript-eslint/no-explicit-any */
export const randomizeArray = (array: any[]): any[] => {
  return array.sort(() => 0.5 - Math.random());
};
