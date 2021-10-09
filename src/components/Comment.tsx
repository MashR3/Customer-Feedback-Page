import React from 'react';
import styled from 'styled-components';
import { CommentObject } from '../types';
import { FaUserCircle } from 'react-icons/fa';

type Props = {
  comment: CommentObject;
};

const Comment: React.FC<Props> = ({ comment }) => (
  <CommentComponent>
    <p className='comment-header'>
      <FaUserCircle className='usericon' title='usericon' />
      {comment.name}
    </p>
    <span>
      Reviewed on <time>{comment.date}</time>
    </span>
    <div>{comment.rating}</div>
    {comment.comment && (
      <>
        <Separator />
        <p>{comment.comment}</p>
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
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  background: #edc7b7;
  border: solid 1px black;
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: 3px 3px #888888;
  p {
    margin: 4px;
  }
  span {
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
    color: #123c69;
    font-weight: 600;
    display: block;
  }
  .usericon {
    vertical-align: top;
    margin-right: 8px;
    color: black;
  }
`;
