import React from 'react';
import styled from 'styled-components';
import { CommentObject } from '../types';

type Props = {
  commentArray: CommentObject[];
};

const commentBuilder = (commentArray: CommentObject[]) => {
  return commentArray.map((comment) => {
    return (
      <Comment key={comment.id}>
        <p>
          {comment.name} -{' '}
          <span style={{ color: 'green' }}>
            <i>{comment.email}</i>
          </span>
        </p>
        <p>
          {comment.rating} - {comment.comment}
        </p>
      </Comment>
    );
  });
};

const ProductComments: React.FC<Props> = ({ commentArray }) => (
  <Comments>{commentBuilder(commentArray)}</Comments>
);

export default ProductComments;

const Comments = styled.div`
  // width: 90%;
  border-radius: 10px;
`;

const Comment = styled.div`
  padding: 8px;
  background: rgb(232, 97, 87);
  border: solid 2px black;
`;
