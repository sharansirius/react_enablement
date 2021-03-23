// eslint-disable-next-line consistent-return
const cloneObject = (obj: string) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default cloneObject;
