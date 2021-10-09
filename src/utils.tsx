import { CommentObject } from "./types";

export const buildDate = () => {
  let date = new Date();
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const buildChartData = (data: CommentObject[]) => {
  return [
    { rating: '5 Star', total: data.filter((item) => item.rating === 5).length },
    { rating: '4 Star', total: data.filter((item) => item.rating === 4).length },
    { rating: '3 Star', total: data.filter((item) => item.rating === 3).length },
    { rating: '2 Star', total: data.filter((item) => item.rating === 2).length },
    { rating: '1 Star', total: data.filter((item) => item.rating === 1).length },
  ];
};
