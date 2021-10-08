import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductFeedbackForm from './components/ProductFeedbackForm';
import ProductMetrics from './components/ProductMetrics';
import ProductComments from './components/ProductComments';
import { CommentObject } from './types';
import initialComments from './MockComments.json';
import './styles.css';

function App() {
  const [itemName, setItemName] = useState('Headphoneless Headphones');
  const [itemDescription, setDescription] = useState(
    "Welcome to the revolutionary concept of paying for an item and not receiving it! You (won't) hear the difference with these!"
  );
  let [commentArray, setComments] = useState<CommentObject[]>(initialComments);

  useEffect(() => {
    console.log('useEffect Comment section');
  }, [commentArray]);

  return (
    <div>
      <Header>
        <h1>Product Review</h1>
        <hr />
        <h2>You are reviewing {itemName}</h2>
        <p>{itemDescription}</p>
      </Header>
      <MainContainer className='App'>
        <ProductFeedbackForm
          setComments={setComments}
          commentArray={commentArray}
        />
        <ProductMetrics />
        <ProductComments commentArray={commentArray} />
      </MainContainer>
    </div>
  );
}

export default App;

const Header = styled.header`
  h1 {
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 10px;
    word-spacing: 4px;
    color: #123C69;
    text-transform: uppercase;
  }
  p {
    text-align: center;
  }
  h2 {
    letter-spacing: 2px;
    // margin-left: 8px;
    text-align: center;
    text-transform: capitalise;

  }
`;

const MainContainer = styled.div`
  // padding: 12px;
  // display: flex;
  // justify-content: space-between;
`;
