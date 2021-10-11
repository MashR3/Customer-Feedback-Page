import { CommentObject } from './types';

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

export const formatDateString = (comment: CommentObject) => {
  return comment.dateObject.day + '/' + comment.dateObject.month + '/' + comment.dateObject.year
}

export const totalStars = 5;

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

  let countTotal = (data: CommentObject[], month: string) => {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
      if (months[data[i].dateObject.month - 1] === month) count = count + 1;
    }
    return count;
  };

  return months.map((month) => ({
    name: month,
    reviews: countTotal(data, month),
  }));
};
