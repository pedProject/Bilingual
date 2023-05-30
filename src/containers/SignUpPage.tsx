import AuthForm from "../components/AuthForm";
import { Input } from "../components/UI/input/Input";

const SignUpPage = (): JSX.Element => {
  return (
    <AuthForm
      question={{ questionText: "DON'T HAVE AN ACCOUNT?", answer: "LOG IN", path: "/signup" }}
      buttonText="SIGN IN"
      title="Create an Account"
    >
      <Input value="" placeholder="First name" onChange={() => console.log("onchange")} />
      <Input value="" placeholder="Last name" onChange={() => console.log("onchange")} />
      <Input value="" placeholder="Email" onChange={() => console.log("onchange")} />
      <Input value="" placeholder="Password" onChange={() => console.log("onchange")} />
    </AuthForm>
  );
};

export default SignUpPage;
