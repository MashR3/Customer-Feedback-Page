import React from 'react';
import styled from 'styled-components';
import { buildChartData } from '../utils';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
  Legend,
  Line,
} from 'recharts';
import { CommentObject } from '../types';

type Props = {
  commentArray: CommentObject[];
};

const data = [
  {
    name: 'May 21',
    'Monthly Reviews': 2,
  },
  {
    name: 'June 21',
    'Monthly Reviews': 1,
  },
  {
    name: 'June 21',
    'Monthly Reviews': 0,
  },
  {
    name: 'July 21',
    'Monthly Reviews': 2,
  },
];

const barBuilder = (commentArray: CommentObject[]) => {
  console.log(commentArray);

  console.log('Code run');
  return (
    <Bar dataKey={'total'}>
      {buildChartData(commentArray).map((rateValue: any) => (
        <Cell key={rateValue['rating']} fill='#fd3d77' />
      ))}
    </Bar>
  );
};

const ProductMetrics: React.FC<Props> = ({ commentArray }) => (
  <>
    <GraphContainer>
      <FigCaption>{commentArray.length} total ratings</FigCaption>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={buildChartData(commentArray)}
          barCategoryGap='15%'
          barSize='20'
          layout='vertical'
          margin={{ left: 10, right: 40, bottom: 0, top: 20 }}
        >
          <YAxis
            type='category'
            dataKey={'rating'}
            axisLine={false}
            tickLine={false}
          />
          <XAxis type='number' minTickGap={1} allowDecimals={false} />
          <Tooltip />
          {barBuilder(commentArray)}
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>

    <GraphContainer style={{ marginTop: 0 }}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ left: 10, right: 40, bottom: 0, top: 0 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend style={{ position: 'relative' }} />
          <Line
            type='monotone'
            dataKey='Monthly Reviews'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  </>
);

export default ProductMetrics;

const GraphContainer = styled.figure`
  float: left;
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
  margin-left: 16px;
  @media only screen and (max-width: 760px) {
    margin-left: 0px;
  }
  padding: 24px;
  border-radius: 10px;
`;

const FigCaption = styled.figcaption`
  text-decoration: underline;
`;
