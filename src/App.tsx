import React, { useState } from 'react';
import styled from 'styled-components';
import ProductFeedbackForm from './components/ProductFeedbackForm';
import ProductMetrics from './components/ProductMetrics';
import ProductComments from './components/ProductComments';

function App() {
  const [itemName, setItemName] = useState('Headphoneless Headphones');
  const [itemDescription, setDescription] = useState(
    "Welcome to the revolutionary concept of paying for an item and not receiving it! You (won't) hear the difference with these!"
  );

  return (
    <div className='App' style={{ margin: 24 }}>
      <header className='App-header'>
        <h1>Customer Feedback: {itemName}</h1>
        <p>{itemDescription}</p>
      </header>
      <MainContainer>
        <ProductFeedbackForm />
        <ProductMetrics />
      </MainContainer>

      <ProductComments />
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
