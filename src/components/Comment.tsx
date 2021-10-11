import React from 'react';
import styled from 'styled-components';
import { CommentObject } from '../types';
import { FaUserCircle, FaStar } from 'react-icons/fa';
import { formatDateString } from '../utils';

type Props = {
  comment: CommentObject;
};

const starBuilder = (comment: CommentObject) => {
  let i = 0;
  let arr = [];
  while (i < comment.rating) {
    arr.push(
      <FaStar
        className='staricon'
        title='staricon'
        key={`${comment.id}-${i}`}
      />
    );
    i++;
  }
  return arr;
};

const Comment: React.FC<Props> = ({ comment }) => (
  <CommentComponent>
    <p className='comment-header'>
      <FaUserCircle className='usericon' title='usericon' />
      {comment.name}
    </p>
    <span>{starBuilder(comment)}</span>
    <span className='time-container'>
      Reviewed on <time>{formatDateString(comment)}</time>
    </span>
    {comment.comment && (
      <>
        <Separator />
        <p id={`comment-${comment.id}`} >{comment.comment}</p>
      </>
    )}
  </CommentComponent>
);

export default Comment;

const Separator = styled.hr`
  border: none;
  height: 1px;
  margin: 4px;
`;

const CommentComponent = styled.div`
  color: #0e1545;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  background: #e8fdff;
  border: solid 1px black;
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: 3px 3px #888888;
  font-weight: 100;
  p {
    margin: 4px;
  }
  .time-container {
    margin: 4px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
  }
  div {
    position: absolute;
    right: 8px;
    top: 8px;
  }
  .comment-header {
    font-weight: 400;
    display: block;
    float: left;
  }
  .usericon {
    color: black;
    vertical-align: top;
    margin-right: 8px;
  }
  .staricon {
    color: #fd3d77;
    margin: 5px 0px 2px 4px;
  }
`;
