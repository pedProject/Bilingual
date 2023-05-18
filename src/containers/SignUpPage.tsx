import { Input } from "../components/UI/input/Input";

import SignInSignUpLayout from "./SignInSignUpLayout";

const SignUpPage = () => {
  return (
    <SignInSignUpLayout
      question={{ questionText: "DON'T HAVE AN ACCOUNT?", answer: "LOG IN" }}
      buttonText="SIGN IN"
      title="Create an Account"
    >
      <Input value="" placeholder="First name" onChange={() => console.log("onchange")} />
      <Input value="" placeholder="Last name" onChange={() => console.log("onchange")} />
      <Input value="" placeholder="Email" onChange={() => console.log("onchange")} />
      <Input value="" placeholder="Password" onChange={() => console.log("onchange")} />
    </SignInSignUpLayout>
  );
};

export default SignUpPage;
