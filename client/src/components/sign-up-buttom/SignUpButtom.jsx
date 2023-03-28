import * as S from "./styles";

const SignUpButtom = ({ name, signUpClick }) => {
  return (
    <S.SignUpButtomWrapper>
      <S.SignUpButton onClick={signUpClick}>{name}</S.SignUpButton>
    </S.SignUpButtomWrapper>
  );
};

export default SignUpButtom;
