import React, { useState } from 'react';
import styled from 'styled-components';

function ProductFeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log('Form submitted');
    console.log(event.target);
  };

  const handleNameInput = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailInput = (event: any) => {
    setEmail(event.target.value);
  };

  const handleOnClick = (event: any) => setRating(event.target.value);

  const ratingBuilder = () => {
    let rangeArray = [1, 2, 3, 4, 5];
    return rangeArray.map((rating) => (
      <input
        type='radio'
        id={rating.toString()}
        key={rating}
        name='rating'
        value={rating}
        onClick={handleOnClick}
      />
    ));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Let us know what you think:</h3>
      <label>
        Name:{' '}
        <input
          type='text'
          name='name'
          onChange={handleNameInput}
          value={name}
        />
      </label>
      <br />
      <label>
        Email:{' '}
        <input
          type='text'
          name='email'
          onChange={handleEmailInput}
          value={email}
        />
      </label>
      <br />
      <label>
        Rating: {rating}
        {ratingBuilder()}
      </label>
      <button>Submit Review</button>
    </Form>
  );
}

const Form = styled.form`
  background-color: rgb(220, 216, 208);
  min-width: 45%;
  padding: 16px;
`;

export default ProductFeedbackForm;
