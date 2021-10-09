import React from 'react';
import styled from 'styled-components';
import { buildChartData, totalRatings} from '../utils';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
} from 'recharts'; 
import { CommentObject } from '../types';

type Props = {
  commentArray: CommentObject[];
};

const data = buildChartData();

const barBuilder = () => {
  return (
    <Bar dataKey={'total'}>
      {data.map((rateValue: any) => (
        <Cell key={rateValue['rating']} fill='#fc5185' />
      ))}
    </Bar>
  );
};

const ProductMetrics: React.FC<Props> = ({ commentArray }) => (
    <GraphContainer>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          barCategoryGap='15%'
          barSize='20'
          layout='vertical'
          margin={{ left: 10, right: 30, bottom: 0, top: 20 }}
        >
          <YAxis
            type='category'
            dataKey={'rating'}
            axisLine={false}
            tickLine={false}
          />
          <XAxis type='number' minTickGap={1} allowDecimals={false} />
          <Tooltip />
          {barBuilder()}
        </BarChart>
      </ResponsiveContainer>
      <figcaption>{totalRatings} total ratings</figcaption>
    </GraphContainer>
  );

export default ProductMetrics;

const GraphContainer = styled.figure`
  height: 300px;
  // min-width: 49%;
  background: #e7c8b8;
  padding: 24px;
  border-radius: 10px;
`;
