import React, { useState } from 'react';
import styled from 'styled-components';
import { buildDateObject } from '../utils';
import { CommentObject } from '../types';
import StarRatings from 'react-star-ratings';

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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let newComment = {
      id: commentArray.length + 1,
      name: name,
      email: email,
      rating: +rating,
      comment: comment,
      dateObject: buildDateObject(),
    };

    let newArray = [newComment, ...commentArray];

    setComments(newArray);
    setName('');
    setEmail('');
    setRating(0);
    setComment('');
  };

  const changeRating = (newRating: number) => setRating(newRating);

  // For accessibility and screen readers
  const ratingBuilder = (num: number) => {
    let rangeArray = [1, 2, 3, 4, 5];
    return rangeArray.map((rating) => (
      <input
        checked={num === rating}
        type='radio'
        id={rating.toString()}
        aria-label={`${rating}-stars`}
        key={rating}
        name='form-rating'
        value={rating}
        onClick={(e: React.FormEvent<HTMLInputElement>): void =>
          setRating(+e.currentTarget.value)
        }
        onChange={() => changeRating(rating)}
        className='hidden-rating'
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
        // pattern='[A-Za-z]'
        name='form-username'
        onChange={(e: React.FormEvent<HTMLInputElement>): void =>
          setName(e.currentTarget.value)
        }
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
        onChange={(e: React.FormEvent<HTMLInputElement>): void =>
          setEmail(e.currentTarget.value)
        }
        // pattern='[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]'
        value={email}
        required
      />
      <br />
      <Label htmlFor='form-rating'>
        Rating: {rating} stars
        {ratingBuilder(rating)}
      </Label>
      <StarRatings
        starDimension='32px'
        starEmptyColor='#ffffff'
        starHoverColor='gold'
        rating={rating}
        starRatedColor='#fd3d77'
        changeRating={changeRating}
        numberOfStars={5}
      />
      <br />
      <Label htmlFor='form-comment'>Comment</Label>
      <CommentArea
        id='form-comment'
        rows={8}
        maxLength={500}
        name='form-comment'
        onChange={(e: React.FormEvent<HTMLTextAreaElement>): void =>
          setComment(e.currentTarget.value)
        }
        value={comment}
      />
      <br />
      <Button id='form-button-submit' type='submit'>
        Submit Review
      </Button>
    </Form>
  );
};

const Form = styled.form`
  background-color: #69d1d7;
  padding: 24px;
  border-radius: 10px;
  margin-bottom: 24px;
  margin-right: 4px;
  margin-left: 4px;
  h3 {
    text-align: left;
    letter-spacing: 2px;
    margin-top: 0px;
  }
  .hidden-rating {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }
  .star-ratings {
    display: flex !important;
    margin-top: 12px !important;
    @media only screen and (max-width: 760px) {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
`;

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
  border: 1px solid #636464;
`;
const Button = styled.button`
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #fd3d77;
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
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: flex;
  padding-bottom: 4px;
  font-weight: 400;
  border-radius: 4px 0px 0px 4px;
  color: #0e1545;
`;

const Input = styled.input`
  color: #60656f;
  font-size: 18px;
  font-weight: 200;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #ffffff;
  border: 1px solid #636464;
  border-radius: 4px;
  display: block;
  margin-bottom: 4px;
  padding: 12px;
  width: 80%;
  outline: none;
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;

export default ProductFeedbackForm;
