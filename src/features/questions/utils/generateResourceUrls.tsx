export const generateResourceUrls = (number: number): string[] => {
  const urls: string[] = [];
  for (let i = 1; i <= number; i++) {
    const id: number = Math.floor(Math.random() * 1025 + 1);
    urls.push(`/api/v2/pokemon/${id}`);
  }
  return urls;
};
