import React from "react";
import styled from "styled-components";
import mainImage from "../../img/instagram.jpeg";
const Panel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  align-items: center;
`;
function MainPanel() {
  return (
    <Panel>
      <img src={mainImage} alt="mainImage" />
      숭실대학교 인스타그램
    </Panel>
  );
}

export default MainPanel;
