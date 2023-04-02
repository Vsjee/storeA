export const setLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: string, defaultValue: T) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : defaultValue;
};
