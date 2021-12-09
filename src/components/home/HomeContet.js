import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {} from "react-bootstrap";
import Card from "./Card";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function HomeContet({ CardList }) {
  console.log(CardList);
  return (
    <div>
      <GridLayout>
        {CardList.map((card, idx) => (
          <Card
            key={idx}
            id={card.number}
            author={card.id}
            text={card.contents}
            date={card.date}
            images={card.images}
          />
        ))}
      </GridLayout>
    </div>
  );
}

export default HomeContet;
