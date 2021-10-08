import React, { useState } from 'react';
import styled from 'styled-components';
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
    };

    let newArray = [newComment, ...commentArray];

    setComments(newArray);

    //if successful, clear form!!
    //if not, validation and catch and log!
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
        name='form-rating'
        value={rating}
        onClick={handleOnClick}
        required
      />
    ));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Let us know what you think!</h3>
      <Label htmlFor='form-username'>Name</Label>
      <Input
        id='form-username'
        placeholder='Enter your name here'
        type='text'
        name='form-username'
        onChange={handleNameInput}
        value={name}
        required
      />
      <br />
      <Label htmlFor='form-email'>Email</Label>
      <Input
        id='form-email'
        placeholder='Enter your email address here'
        type='email'
        name='form-email'
        onChange={handleEmailInput}
        value={email}
        required
      />
      <br />
      <Label htmlFor='form-rating'>
        Rating: {rating}
        {ratingBuilder()}
      </Label>
      <br />
      <Label htmlFor='form-comment'>Comment</Label>
      <CommentArea
        id='form-comment'
        rows={10}
        maxLength={500}
        name='form-comment'
        onChange={handleCommentInput}
        value={comment}
      />
      <br />
      <Button id='form-button-submit' type='submit'>
        Submit Review
      </Button>
    </Form>
  );
};

const CommentArea = styled.textarea`
  max-width: 100%;
  width: 100%;
  color: #60656f;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #ffffff;
  border: solid 1px #cccccc;
  border-radius: 4px;
  display: block;
  margin-bottom: 4px;
  padding: 12px;
  border-width: 1px;
`;
const Button = styled.button`
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #fc5185;
  border-radius: 4px;
  border: none;
  display: block;
  margin: auto;
  padding: 12px;
  max-width: 100%;
  width: 60%;
  :hover {
    background-color: #b0385d; /* Darker pink */
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  :active {
    background-color: #b0385d;
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }
`;

const Form = styled.form`
  background-color: #bab2b5;
  padding: 24px;
  border-radius: 4px;
`;

const Label = styled.label`
  display: flex;
  padding-bottom: 4px;
  font-weight: inherit;
`;

const Input = styled.input`
  color: #60656f;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #ffffff;
  border: solid 1px #cccccc;
  border-radius: 4px;
  display: block;
  margin-bottom: 4px;
  padding: 12px;
  max-width: 80%;
  border-width: 1px;
  width: 100%;
`;

export default ProductFeedbackForm;
