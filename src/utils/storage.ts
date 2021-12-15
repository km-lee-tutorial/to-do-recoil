export const setCategory = (Category: string) => {
  return localStorage.setItem('CategoryData', Category);
};

export const getCategory = () => {
  return localStorage.getItem('CategoryData');
};

export const removeCategory = () => {
  return localStorage.removeItem('CategoryData');
};

export const isCategory = (): boolean => {
  if (!localStorage.getItem('CategoryData')) return false;
  return true;
};
