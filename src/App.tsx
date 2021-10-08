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
    <div className='App'>
      <header className='App-header'>
        <h1>Customer Feedback: {itemName}</h1>
        <p>{itemDescription}</p>
      </header>
      <MainContainer>
        <ProductFeedbackForm
          setComments={setComments}
          commentArray={commentArray}
        />
        <ProductMetrics />
      </MainContainer>

      <ProductComments commentArray={commentArray} />
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  padding: 12px;
  // display: flex;
  // justify-content: space-between;
`;
