import AuthForm from "../components/AuthForm";
import { Input } from "../components/UI/Input/Input";
import { Checkbox } from "../components/UI/checkbox/Checkbox";
import FlexBoxContainer from "../layout/FlexBoxContainer";

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
