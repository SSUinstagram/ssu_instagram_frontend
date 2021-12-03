import react from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import React from "react";

const HeaderPanel = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: gray;
  Button {
    width: 13%;
    margin: 5px;
  }
`;
function Header() {
  function ClickLogout() {
    alert("추가구현 필요");
  }

  const navigate = useNavigate();
  return (
    <HeaderPanel>
      <Button variant="primary" onClick={() => navigate("./")}>
        Home
      </Button>{" "}
      <Button variant="secondary" onClick={() => navigate("/new")}>
        New
      </Button>{" "}
      <Button variant="success" onClick={() => navigate("/profile")}>
        Profile
      </Button>{" "}
      <Button variant="warning" onClick={() => navigate("/follow")}>
        Follow
      </Button>{" "}
      <Button variant="danger" onClick={() => navigate("/msg")}>
        Message
      </Button>{" "}
      <Button variant="info" onClick={ClickLogout}>
        Logout
      </Button>{" "}
    </HeaderPanel>
  );
}

export default Header;
