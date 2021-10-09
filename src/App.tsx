import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductFeedbackForm from './components/ProductFeedbackForm';
import ProductMetrics from './components/ProductMetrics';
import ProductComments from './components/ProductComments';
import Header from './components/Header';
import { CommentObject } from './types';
import initialComments from './MockComments.json';
import './styles.css';

function App() {

  let [commentArray, setComments] = useState<CommentObject[]>(initialComments);

  // useEffect(() => {
  //   console.log('useEffect Comment section');
  // }, [commentArray]);

  return (
    <div>
      <Header />
      <MainContainer className='App'>
        <ProductFeedbackForm
          setComments={setComments}
          commentArray={commentArray}
        />
        <ProductMetrics commentArray={commentArray}/>
        <ProductComments commentArray={commentArray} />
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  // padding: 12px;
  // display: flex;
  // justify-content: space-between;
`;
