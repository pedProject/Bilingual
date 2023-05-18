import React from "react";
import type { ReactNode } from "react";
import { styled } from "@mui/material";
import { BookIcon, GoogleIcon } from "../assets/index";
import { Button } from "../components/UI/Button/Button";
import FlexBoxContainer from "../layout/FlexBoxContainer";

type SignInSignUpLayoutProps = {
  children: ReactNode;
  title: string;
  buttonText: string;
  question: {
    questionText: string;
    answer: string;
  };
};

const SignInSignUpLayout: React.FC<SignInSignUpLayoutProps> = ({
  children,
  title,
  buttonText,
  question
}) => {
  return (
    <VioletBackground>
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
          <Button style={{ height: "45px", borderRadius: "6px" }} fullWidth>
            {buttonText}
          </Button>
          <GoogleButton>
            <GoogleIcon /> SIGN UP WITH GOOGLE
          </GoogleButton>
          <p>
            {question.questionText} <span style={{ color: "#3A10E5" }}>{question.answer}</span>
          </p>
        </FlexBoxContainer>
      </Form>
    </VioletBackground>
  );
};

export default SignInSignUpLayout;

const VioletBackground = styled("div")`
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

const GoogleButton = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 240px;
  height: 45px;
  outline: none;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 1px 2px rgba(3, 3, 3, 0.2);
  border-radius: 8px;
`;
