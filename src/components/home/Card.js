import React from "react";
import styled from "styled-components";

function Card({ id, images, author, date, text }) {
  console.log(images[0].img1);
  return (
    <CardWrapper>
      <img
        src={`http://localhost:8030/write/test?image=${images[0].img1}`}
        alt="alt"
        height="250px"
        width="250px"
      />
      <p>글쓴이: {author}</p>
      <p>글내용: {text}</p>
      <p>작성시간: {date}</p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > image {
    width: 150px;
    height: 150px;
  }
`;

export default Card;
