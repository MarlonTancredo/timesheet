import * as F from "../styles/buttons/styles";

const SignUpButton = ({ name, signUpClick }) => {
  return (
    <F.FormButtomWrapper>
      <F.FormButton onClick={signUpClick}>{name}</F.FormButton>
    </F.FormButtomWrapper>
  );
};

export default SignUpButton;
