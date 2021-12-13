import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

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
  const ClickLogout = async () => {
    try {
      Cookies.remove("user-id");
      await axios.post("./login/logout");
      navigate("/");
    } catch (e) {}
  };

  const navigate = useNavigate();
  return (
    <>
      <HeaderPanel>
        <Button
          variant="primary"
          onClick={() => navigate('/home')}
        >
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
    </>
  );
}

export default Header;
