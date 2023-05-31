import React from "react";

import type { ReactNode } from "react";

import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import { BookIcon, GoogleIcon } from "../assets/index";
import FlexBoxContainer from "../layout/FlexBoxContainer";

import { Button } from "./UI/Button/Button";

type LayoutProps = {
  children: ReactNode;
  title: string;
  buttonText: string;
  question: {
    questionText: string;
    answer: string;
    path: string;
  };
};

const AuthForm: React.FC<LayoutProps> = ({ children, title, buttonText, question }) => {
  return (
    <Background>
      <Form>
        <FlexBoxContainer
          padding="1rem 0 1rem 0"
          JK="center"
          AI="center"
          gap="1.1rem"
          width="80%"
          FD="column"
          height="100%"
        >
          <BookIcon />
          <h3>{title}</h3>
          {children}
          <SignInButton type="submit" fullWidth>
            {buttonText}
          </SignInButton>
          <GoogleButton>
            <GoogleIcon /> SIGN UP WITH GOOGLE
          </GoogleButton>
          <p>
            {question.questionText}
            <NaviagateButton to={question.path}>{question.answer}</NaviagateButton>
          </p>
        </FlexBoxContainer>
      </Form>
    </Background>
  );
};

export default AuthForm;

const Background = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #6b0fa9 0%, #520fb6 100%);
`;
const Form = styled("form")`
  background-color: white;
  width: 45%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoogleButton = styled(Button)`
  gap: 7px;
  background-color: #ffffff;
  width: 17vw;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 1px 2px rgba(3, 3, 3, 0.2);
  &.MuiButtonBase-root {
    background-color: #ffffff;
    color: black;
  }
`;
const SignInButton = styled(Button)`
  height: 45px;
  border-radius: 6px;
`;
const NaviagateButton = styled(Link)`
  cursor: pointer;
  color: #3a10e5;
`;
