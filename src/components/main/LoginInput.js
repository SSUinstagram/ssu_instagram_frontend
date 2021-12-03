import React, { useState, useRef } from "react";
import styled from "styled-components";
import { PointColor, PrimaryColor } from "../../Color/Color";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
// 대문자

const LoginPanel = styled.div`
  width: 100%;
  display: flex;
  padding-top: 100px;
  padding-bottom: 80px;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1145px) {
    height: 559px;
  }
`;

const LoginInputPanel = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "YonnGodic340";

  @media screen and (max-width: 1145px) {
    width: 100vw;
  }
`;

const SignupButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  width: 400px;
  background-color: ${PointColor};
  font-family: "YonnGodic340";
  color: white;
  border-radius: 3px;
  border: 1px solid ${PointColor};

  @media screen and (max-width: 1145px) {
    width: 100%;
  }
`;

const LoginButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  width: 400px;
  background-color: ${PointColor};
  font-family: "YonnGodic340";
  color: white;
  border-radius: 3px;
  border: 1px solid ${PointColor};

  @media screen and (max-width: 1145px) {
    width: 100%;
  }
`;

const InputForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  input {
    outline: none;
    border: none;
  }
  .email {
    margin-top: 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-left: ${(props) =>
      props.emailState ? "3px solid" + PrimaryColor : "1px solid black"};
    color: gray;
  }
  .password {
    margin-top: 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-left: ${(props) =>
      props.passwordState ? "3px solid" + PrimaryColor : " 1px solid black"};
    color: gray;
  }

  @media screen and (max-width: 1145px) {
    width: 100%;
  }
`;
function LoginInput() {
  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeFormData = (e) => {
    const { value, type } = e.target;
    setForm({
      ...form,
      [type]: value,
    });
  };

  const callLogin = async (e) => {
    console.log(form);
    try {
      const result = await axios.get("/login", {
        params: form,
      });
      const { id } = result.data.user;
      Cookies.set("user-id", id);

      console.log(id);

      navigate("/home");
    } catch (err) {
      alert("등록된 회원이 없습니다.");
    }
  };

  const callSignUpPage = (e) => {
    navigate("/account");
  };

  const onClick = (inputType) => {
    if (inputType === "email") {
      emailRef.current.focus();
      setEmailState(true);
      setPasswordState(false);
    } else if (inputType === "password") {
      passwordRef.current.focus();
      setEmailState(false);
      setPasswordState(true);
    }
  };
  return (
    <LoginPanel>
      <LoginInputPanel>
        <InputForm emailState={emailState} passwordState={passwordState}>
          <div className="email" onClick={() => onClick("email")}>
            이메일주소
            <input
              type="email"
              name="email"
              onChange={onChangeFormData}
              ref={emailRef}
            />
          </div>
          <div className="password" onClick={() => onClick("password")}>
            비밀번호
            <input
              type="password"
              name="password"
              onChange={onChangeFormData}
              ref={passwordRef}
            />
          </div>
        </InputForm>

        <LoginButton onClick={callLogin}>로그인</LoginButton>
        <SignupButton onClick={callSignUpPage}>사용자 등록</SignupButton>
      </LoginInputPanel>
    </LoginPanel>
  );
}

export default LoginInput;
