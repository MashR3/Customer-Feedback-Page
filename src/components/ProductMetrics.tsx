import React from 'react';
import styled from 'styled-components';
import { buildChartData, buildYearTrend } from '../utils';
import { CommentObject } from '../types';
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

type Props = {
  commentArray: CommentObject[];
};

const barBuilder = (commentArray: CommentObject[]) => {
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
      <FigCaption>{commentArray.length} Total Ratings</FigCaption>
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
      <FigCaption>Review Trend for Current Year: 2021</FigCaption>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={buildYearTrend(commentArray)}
          margin={{ left: 10, right: 40, bottom: 0, top: 25 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis type='number' minTickGap={1} allowDecimals={false} />
          <Tooltip />
          <Legend verticalAlign='top' height={36} />
          <Line
            type='monotone'
            dataKey='reviews'
            stroke='#0e1545'
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
