import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PointColor, PrimaryColor } from "../../Color/Color";
import axios from "axios";

const SignupPanel = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const SingupLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 50px;
  h1 {
    padding-top: 30px;
    font-size: 30px;
    line-height: 0;
  }
  p {
    font-size: 15px;
    line-height: 20px;
    color: gray;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    h1 {
      padding-top: 30px;
      font-size: 45px;
      line-height: 0;
    }
    p {
      font-size: 13px;
      line-height: 20px;
      color: gray;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 10px;
      line-height: 20px;
      color: gray;
    }
  }
`;

const LoginButton = styled.button`
  margin-top: 30px;
  padding: 10px;
  width: 554px;
  background-color: ${PointColor};
  color: white;
  border-radius: 3px;
  border: 1px solid ${PointColor};

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const InputForm = styled.div`
  width: 554px;
  display: flex;
  background: white;
  flex-direction: column;
  input {
    outline: gray;
    border: none;
    background: none;
  }
  label {
    line-height: 300%;
  }
  .invalidEmail {
    color: red;
    font-size: 8px;
    line-height: 0;
  }
  .validEmail {
    color: green;
    font-size: 8px;
    line-height: 0;
  }
  .validEmail {
    color: green;
    font-size: 8px;
    line-height: 0;
  }
  .invalidPW {
    color: red;
    font-size: 8px;
    line-height: 0;
  }
  .validPW {
    color: green;
    font-size: 8px;
    line-height: 0;
  }
  .email {
    margin-top: 1px;
    padding-bottom: 18px;
    padding-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-left: ${(props) =>
      props.inputStates.email ? "3px solid" + PrimaryColor : "1px solid gray"};
    color: gray;
  }
  .password {
    padding-bottom: 18px;
    padding-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-left: ${(props) =>
      props.inputStates.password
        ? "3px solid" + PrimaryColor
        : " 1px solid gray"};
    color: gray;
  }
  .confirmPassword {
    padding-bottom: 18px;
    padding-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-left: ${(props) =>
      props.inputStates.confirmPassword
        ? "3px solid" + PrimaryColor
        : "1px solid gray"};
    color: gray;
  }
  .name {
    padding-bottom: 18px;
    padding-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-left: ${(props) =>
      props.inputStates.name ? "3px solid" + PrimaryColor : "1px solid gray"};
    color: gray;
  }
  .id {
    padding-bottom: 18px;
    padding-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-left: ${(props) =>
      props.inputStates.id ? "3px solid" + PrimaryColor : "1px solid gray"};
    color: gray;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

function LoginSignup() {
  const [isValidPW, setIsValidPW] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    name: "",
    id: "",
  });

  useEffect(() => {
    let emailRule =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    //????????? ???????????????
    if (emailRule.test(loginState.email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    if (loginState.confirmPassword === loginState.password) {
      setIsValidPW(true);
    } else {
      setIsValidPW(false);
    }
  }, [
    loginState.password,
    loginState.name,
    loginState.email,
    loginState.id,
    loginState.confirmPassword,
  ]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const [inputStates, setInputStates] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    name: false,
    id: false,
  });
  const clickJoin = async () => {
    const body = {
      email: loginState.email,
      password: loginState.password,
      name: loginState.name,
      id: loginState.id,
    };
    try {
      let result = await axios.post("/signup", body);
      navigate("/");
    } catch (e) {
      alert("????????? ?????? ????????? ??????");
    }
  };
  const onClick = (inputType) => {
    switch (inputType) {
      case "email":
        setInputStates({
          email: true,
        });
        break;
      case "password":
        setInputStates({
          password: true,
        });
        break;
      case "confirmPassword":
        setInputStates({
          confirmPassword: true,
        });
        break;
      case "name":
        setInputStates({
          name: true,
        });
        break;
      case "id":
        setInputStates({
          id: true,
        });
        break;
      default:
    }
  };

  return (
    <SignupPanel>
      <SingupLayout>
        <h1>??????????????? Instagram</h1>
        <p>???????????? ?????? ??? ?????????????????? ??????</p>
        <InputForm inputStates={inputStates}>
          <label className="email" onClick={() => onClick("email")}>
            ???????????????
            <input
              type="email"
              name="email"
              onChange={onChange}
              onBlur={() => {
                setInputStates({ ...inputStates, email: false });
              }}
            />
            {loginState.email && (
              <p className={isValidEmail ? "validEmail" : "invalidEmail"}>
                {isValidEmail ? "????????? ?????? OK" : "????????? ????????? ???????????????"}
              </p>
            )}
          </label>

          <label className="id" onClick={() => onClick("id")}>
            ID
            <input
              type="text"
              name="id"
              onChange={onChange}
              onBlur={() => {
                setInputStates({ ...inputStates, id: false });
              }}
            />
          </label>

          <label className="password" onClick={() => onClick("password")}>
            ????????????
            <input
              type="password"
              name="password"
              onChange={onChange}
              onBlur={() => {
                setInputStates({ ...inputStates, password: false });
              }}
            />
          </label>

          <label
            className="confirmPassword"
            onClick={() => onClick("confirmPassword")}
          >
            ???????????? ??????
            <input
              type="password"
              name="confirmPassword"
              onChange={onChange}
              onBlur={() => {
                setInputStates({ ...inputStates, confirmPassword: false });
              }}
            />
            {loginState.confirmPassword && (
              <p className={isValidPW ? "validPW" : "invalidPW"}>
                {isValidPW ? "??????????????? ??????" : "????????????"}
              </p>
            )}
          </label>

          <label className="name" onClick={() => onClick("name")}>
            ??????
            <input
              type="text"
              name="name"
              onChange={onChange}
              onBlur={() => {
                setInputStates({ ...inputStates, name: false });
              }}
            />
          </label>
        </InputForm>
        <LoginButton onClick={clickJoin}>????????????</LoginButton>
      </SingupLayout>
    </SignupPanel>
  );
}

export default LoginSignup;
