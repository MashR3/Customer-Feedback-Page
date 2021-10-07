import React, { useState } from 'react';
import styled from 'styled-components';
import { buildDate } from '../utils';
import { CommentObject } from '../types';

type Props = {
  setComments: any;
  commentArray: CommentObject[];
};

const ProductFeedbackForm: React.FC<Props> = ({
  setComments,
  commentArray,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    let newComment = {
      id: commentArray.length + 1,
      name: name,
      email: email,
      rating: rating,
      comment: comment,
      date: buildDate(),
    };

    console.log(newComment.date)
    let newArray = [newComment, ...commentArray];

    setComments(newArray);
  };

  const handleNameInput = (event: any) => setName(event.target.value);
  const handleEmailInput = (event: any) => setEmail(event.target.value);
  const handleCommentInput = (event: any) => setComment(event.target.value);
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
      <br />
      <label>
        Comment:{' '}
        <input
          type='textarea'
          name='comment'
          onChange={handleCommentInput}
          value={comment}
        />
      </label>
      <br />
      <button>Submit Review</button>
    </Form>
  );
};

const Form = styled.form`
  background-color: rgb(220, 216, 208);
  min-width: 49%;
  padding: 16px;
`;

export default ProductFeedbackForm;
