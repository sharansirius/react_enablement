export const checkSupport = () => {
  try {
    return "localStorage" in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
};

export const getLocalData = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (e) {
    return null;
  }
};

export const setLocalData = (key: string, data: any) => {
  try {
    return localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    return null;
  }
};
