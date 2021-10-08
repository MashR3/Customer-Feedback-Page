
export const buildDate = () => {
  let date = new Date();
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
