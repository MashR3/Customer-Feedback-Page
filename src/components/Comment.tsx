import React from 'react';
import styled from 'styled-components';
import { CommentObject } from '../types';

type Props = {
  comment: CommentObject;
};

const Comment: React.FC<Props> = ({ comment }) => (
  <CommentComponent>
    <p className='comment-header'>{comment.name}</p>
    <span>
      Reviewed on <time>{comment.date}</time>
    </span>
    <div>{comment.rating}</div>
    <hr />
    <p>{comment.comment}</p>
  </CommentComponent>
);

export default Comment;

const CommentComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  color: #123c69;
  padding: 8px;
  background: #edc7b7;
  border: solid 1px black;
  border-radius: 4px;
  margin-bottom: 4px;
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
    color: #ac3b61;
    font-weight: 600;
    display: block;
  }
`;
