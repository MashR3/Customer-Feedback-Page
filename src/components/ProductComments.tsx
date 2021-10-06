import React, { useState } from 'react';
import styled from 'styled-components';

type CommentObject = {
  id: number;
  name: string;
  email: string;
  rating: number;
  comment: string;
};

function ProductComments() {
  let [commentArray, setComments] = useState<CommentObject[]>([]);

  commentArray = [
    {
      id: 0,
      name: 'Bob',
      email: 'Bob@gmail.com',
      rating: 1,
      comment: 'Not a fan. Where are the headphones?',
    },
    {
      id: 1,
      name: 'Jasmine',
      email: 'Jazzy@gmail.com',
      rating: 4,
      comment:
        'Adore the concept of not having headphones when I pay for headphones!',
    },
  ];

  const commentBuilder = () => {
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

  return <Comments>{commentBuilder()}</Comments>;
}

export default ProductComments;

const Comments = styled.div`
  margin: 8px auto;
  width: 90%;
  border-radius: 10px;
`;

const Comment = styled.div`
  padding: 8px;
  background: rgb(232, 97, 87);
  border: solid 2px black;
`;
