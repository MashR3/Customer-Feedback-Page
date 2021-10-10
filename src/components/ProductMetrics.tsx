import React from 'react';
import styled from 'styled-components';
import { buildChartData } from '../utils';
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

const barBuilder = (commentArray: CommentObject[]) => {
  console.log(commentArray)

  console.log('Code run')
  return (
    <Bar dataKey={'total'}>
      {(buildChartData(commentArray)).map((rateValue: any) => (
        <Cell key={rateValue['rating']} fill='#fd3d77' />
      ))}
    </Bar>
  );
};


const ProductMetrics: React.FC<Props> = ({ commentArray }) => (
    <GraphContainer>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={buildChartData(commentArray)}
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
          {barBuilder(commentArray)}
        </BarChart>
      </ResponsiveContainer>
      <figcaption>{commentArray.length} total ratings</figcaption>
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
