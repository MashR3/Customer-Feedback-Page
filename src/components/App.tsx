import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductFeedbackForm from './ProductFeedbackForm';
import ProductMetrics from './ProductMetrics';
import ProductComments from './ProductComments';
import Header from './Header';
import { CommentObject } from '../types';
import initialComments from '../MockComments.json';
import '../styles.css';

function App() {
  let [commentArray, setComments] = useState<CommentObject[]>(initialComments);

  return (
    <>
      <Header />
      <MainContainer>
        <FloatDiv>
          <ProductFeedbackForm
            setComments={setComments}
            commentArray={commentArray}
          />
        </FloatDiv>
        <FloatDiv>
          <ProductMetrics commentArray={commentArray} />
        </FloatDiv>
        <ProductComments commentArray={commentArray} />
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  min-height: 600px;
  background: #ffffff;
  text-align: center;
  margin: 64px auto;
  padding: 32px;
`;

const FloatDiv = styled.div`
  width: 50%;
  float: left;
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;
