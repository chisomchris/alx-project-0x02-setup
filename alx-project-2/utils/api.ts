export const fetchData = async <T>(url: string, options?: any): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error!`);
  }
  return (await response.json()) as T;
};
