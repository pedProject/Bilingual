import { Checkbox } from "../components/UI/Checkbox";

import { Input } from "../components/UI/input/Input";

import FlexBoxContainer from "../layout/FlexBoxContainer";

import AuthForm from "../components/AuthForm";

const SignInPage = (): JSX.Element => {
  return (
    <AuthForm
      question={{ questionText: "ALREADY HAVE AN ACCOUNT?", answer: "LOG IN", path: "/login" }}
      buttonText="SIGN IN"
      title="Sign In"
    >
      <Input placeholder="Email" value="" onChange={() => console.log("onchange")} />
      <Input placeholder="Password" value="" onChange={() => console.log("onchange")} />
      <FlexBoxContainer width="100%" JK="flex-start" AI="center">
        <Checkbox checked={true} onChange={(event) => console.log(event.target.checked)} /> To
        remember me
      </FlexBoxContainer>
    </AuthForm>
  );
};

export default SignInPage;
