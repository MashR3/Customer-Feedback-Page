import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [itemName] = useState('Headphoneless Headphones');
  const [itemDescription] = useState(
    "Welcome to the revolutionary concept of paying for an item that doesn't work! You (won't) hear the difference with these!"
  );

  return (
    <StyledHeader>
      <h1>Customer Feedback</h1>
      <hr />
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  h1 {
    text-align: center;
    letter-spacing: 10px;
    word-spacing: 4px;
    color: #123c69;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(255, 255, 255);
    margin-top: 20px;
    margin-bottom: 16px;
  }
  p {
    width: 50%;
    padding-left: 64px;
    color: white;
    letter-spacing: 2px;
    font-weight: 200;
    line-height: 24px;
    font-size: 16px;
  }
  h2 {
    color: white;
    font-size: 56px;
    letter-spacing: 8px;
    width: 50%;
    line-height: 60px;
    margin-left: 64px;
    margin-bottom: 24px;
    margin-top: 80px;
    text-align: left;
    text-transform: capitalise;
    @media only screen and (max-width: 760px) {
      font-size: 30px;
    }
  }
`;
