import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [itemName, setItemName] = useState('Headphoneless Headphones');
  const [itemDescription, setDescription] = useState(
    "Welcome to the revolutionary concept of paying for an item and not receiving it! You (won't) hear the difference with these!"
  );

  return (
    <StyledHeader>
      <h1>Product Review</h1>
      <hr/>
      <h2>You are reviewing {itemName}</h2>
      <p>{itemDescription}</p>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  h1 {
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 10px;
    word-spacing: 4px;
    color: #123c69;
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
