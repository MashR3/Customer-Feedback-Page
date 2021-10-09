import mock from './MockComments.json';

export const buildDate = () => {
  let date = new Date();
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const count1 = mock.filter((item) => item.rating === 1).length;
const count2 = mock.filter((item) => item.rating === 2).length;
const count3 = mock.filter((item) => item.rating === 3).length;
const count4 = mock.filter((item) => item.rating === 4).length;
const count5 = mock.filter((item) => item.rating === 5).length;

export const buildChartData = () => {
  return [
    { rating: '5 Star', total: count5 },
    { rating: '4 Star', total: count4 },
    { rating: '3 Star', total: count3 },
    { rating: '2 Star', total: count2 },
    { rating: '1 Star', total: count1 },
  ];
};

export const totalRatings = mock.length;