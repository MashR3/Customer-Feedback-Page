import React from 'react';
import styled from 'styled-components';
import { CommentObject } from '../types';
import Comment from './Comment';

type Props = {
  commentArray: CommentObject[];
};

const ProductComments: React.FC<Props> = ({ commentArray }) => (
  <Comments>
    <h3>Read what others say</h3>
    {commentArray.map((comment) => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </Comments>
);

export default ProductComments;

const Comments = styled.section`
  border-radius: 10px;
  margin-top: 16px;
  padding: 24px;
  background: #1c76d770;
  h3 {
    text-align: left;
    letter-spacing: 2px;
    margin-top: 0px;
  }
`;
