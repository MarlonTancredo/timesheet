import * as S from "./styles";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.LogoSection>
        <S.Title>Time Sheet</S.Title>
      </S.LogoSection>
      <S.PagesSection>
        <S.Links>
          <S.LinkStyled>
            <NavLink to="/">Home</NavLink>
          </S.LinkStyled>
          <S.LinkStyled>
            <NavLink to="/sign-in">Sign in</NavLink>
          </S.LinkStyled>
          <S.LinkStyled>
            <NavLink to="/sign-up">Sign up</NavLink>
          </S.LinkStyled>
        </S.Links>
      </S.PagesSection>
    </S.Wrapper>
  );
};

export default Navbar;
