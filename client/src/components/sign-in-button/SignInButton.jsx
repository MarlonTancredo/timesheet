import * as F from "../styles/buttons/styles";

const SignInButton = ({ name, signInClick }) => {
  return (
    <F.FormButtomWrapper>
      <F.FormButton onClick={signInClick}>{name}</F.FormButton>
    </F.FormButtomWrapper>
  );
};

export default SignInButton;
