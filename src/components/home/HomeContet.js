import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {} from "react-bootstrap";
import Card from "./Card";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

function HomeContet({ CardList }) {
  return (
    <div>
      <GridLayout>
        {CardList.map((card, idx) => (
          <Card
            key={idx}
            number={card.number}
            author={card.id}
            text={card.contents}
            date={card.date}
            images={card.images}
            postInfo={card}
          />
        ))}
      </GridLayout>
    </div>
  );
}

export default HomeContet;
