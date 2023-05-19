import { Checkbox } from "../components/UI/Checkbox";
import { Input } from "../components/UI/input/Input";
import FlexBoxContainer from "../layout/FlexBoxContainer";

import SignInSignUpLayout from "./SignInSignUpLayout";

const SignInPage = (): JSX.Element => {
  return (
    <SignInSignUpLayout
      question={{ questionText: "ALREADY HAVE AN ACCOUNT?", answer: "LOG IN" }}
      buttonText="SIGN IN"
      title="Sign In"
    >
      <Input placeholder="Email" value="" onChange={() => console.log("onchange")} />
      <Input placeholder="Password" value="" onChange={() => console.log("onchange")} />
      <FlexBoxContainer width="100%" JK="flex-start" AI="center">
        <Checkbox checked={true} onChange={(event) => console.log(event.target.checked)} /> To
        remember me
      </FlexBoxContainer>
    </SignInSignUpLayout>
  );
};

export default SignInPage;
