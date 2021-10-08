import React from 'react';
import styled from 'styled-components';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
} from 'recharts';

const data = [
  { rating: '5 Star', total: 11 },
  { rating: '4 Star', total: 14 },
  { rating: '3 Star', total: 21 },
  { rating: '2 Star', total: 55 },
  { rating: '1 Star', total: 87 },
];

const barBuilder = (data) => {
  return (
    <Bar dataKey={'total'}>
      {data.map((rateValue) => (
        <Cell key={rateValue['rating']} fill='#fc5185' />
      ))}
    </Bar>
  );
};

function ProductMetrics() {
  return (
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
            tick={1}
          />
          <XAxis
            type='number'
            // label={{
            //   value: 'Total Ratings',
            //   position: 'insideBottomRight',
            //   offset: -10,
            // }}
          />
          <Tooltip />
          {barBuilder(data)}
        </BarChart>
      </ResponsiveContainer>
      <figcaption>x-number total ratings</figcaption>
    </GraphContainer>
  );
}

export default ProductMetrics;

const GraphContainer = styled.figure`
  height: 300px;
  // min-width: 49%;
  background: #e7c8b8;
  padding: 24px;
  border-radius: 10px;
`;
