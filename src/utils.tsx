import { CommentObject } from './types';
import data from './MockComments.json';

export const buildDateObject = () => {
  let date = new Date();
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getFullYear();

  return {
    day: `${day}`,
    month: `${month}`,
    year: `${year}`,
  };
};

export const buildChartData = (data: CommentObject[]) => {
  return [
    {
      rating: '5 Star',
      total: data.filter((item) => item.rating === 5).length,
    },
    {
      rating: '4 Star',
      total: data.filter((item) => item.rating === 4).length,
    },
    {
      rating: '3 Star',
      total: data.filter((item) => item.rating === 3).length,
    },
    {
      rating: '2 Star',
      total: data.filter((item) => item.rating === 2).length,
    },
    {
      rating: '1 Star',
      total: data.filter((item) => item.rating === 1).length,
    },
  ];
};

export const buildYearTrend = (data: CommentObject[]) => {
  let months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let countTotal = (data: any, mnth: string) => {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
      if (months[data[i].dateObject.month - 1] === mnth) count = count + 1;
    }
    return count;
  };

  return months.map((item) => ({
    name: item,
    reviews: countTotal(data, item),
  }));
};
