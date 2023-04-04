export const getParam = (
  param: string | string[] | undefined,
  defaultValue: number
) => {
  if (!param || Array.isArray(param)) {
    return defaultValue;
  }
  const value = parseInt(param);
  return isNaN(value) ? defaultValue : value;
};