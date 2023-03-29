import * as F from "../styles/forms/styles";

import * as S from "./styles";

import SignInButton from "../sign-in-button/SignInButton";

import SignUpButton from "../sign-up-button/SignUpButton";

const SignIn = () => {
  return (
    <F.Wrapper>
      <F.FormWrapper>
        <F.Title>Sign In</F.Title>
        <F.Break />
        <F.FieldsNames>E-mail</F.FieldsNames>
        <F.Input type="email" autoComplete="email" />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input type="password" autoComplete="current-password" />
        <S.ButtonSection>
          <S.SignInSection>
            <SignInButton name="Sign in" />
          </S.SignInSection>
          <S.SignUpSection>
            <SignUpButton name="Sign up" />
          </S.SignUpSection>
        </S.ButtonSection>
      </F.FormWrapper>
    </F.Wrapper>
  );
};

export default SignIn;
