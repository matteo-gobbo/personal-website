export const extractRepositoryUrl = (apiUrl: string): string => {
  return apiUrl.replace("api.github.com/repos", "github.com");
};

export const extractRepositoryName = (apiUrl: string): string => {
  return apiUrl.replace("https://api.github.com/repos/", "");
};
