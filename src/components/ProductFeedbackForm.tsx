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

    console.log(newComment.date);
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
        aria-label={`${rating}-stars`}
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
      <h3>Share your thoughts</h3>
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
        rows={8}
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
  resize: none;
  max-width: 100%;
  width: 100%;
  color: #60656f;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #ffffff;
  border-radius: 4px;
  display: block;
  margin-bottom: 4px;
  padding: 12px;
  outline: none;
  border: 1px solid #ac3b61;
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
  width: 50%;
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
  cursor: pointer;
`;

const Form = styled.form`
  background-color: #bab2b5;
  padding: 24px;
  border-radius: 10px;
  h3 {
    text-align: left;
    letter-spacing: 2px;
    margin-top: 0px;
  }
`;

const Label = styled.label`
  display: flex;
  padding-bottom: 4px;
  font-weight: inherit;
  border-radius: 4px 0px 0px 4px;
`;

const Input = styled.input`
  color: #60656f;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #ffffff;
  border: 1px solid #ac3b61;
  border-radius: 4px;
  display: block;
  margin-bottom: 4px;
  padding: 12px;
  max-width: 80%;
  width: 100%;
  outline: none;
`;

export default ProductFeedbackForm;
