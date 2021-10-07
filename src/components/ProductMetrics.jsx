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
  { rating: 5, total: 11 },
  { rating: 4, total: 14 },
  { rating: 3, total: 21 },
  { rating: 2, total: 55 },
  { rating: 1, total: 87 },
];

const barBuilder = (data) => {
  return (
    <Bar dataKey={'total'}>
      {data.map((rateValue) => (
        <Cell key={rateValue['rating']} fill='blue' />
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
          margin={{ left: -15, right: 20, bottom: 20, top: 10 }}
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
            label={{
              value: 'Total Ratings',
              position: 'insideBottomRight',
              offset: -10,
            }}
          />
          <Tooltip />
          {barBuilder(data)}
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
}

export default ProductMetrics;

const GraphContainer = styled.div`
  height: 300px;
  min-width: 500px;
  border: solid green 2px;
`;
