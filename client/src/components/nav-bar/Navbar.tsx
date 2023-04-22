import * as F from "../styles/forms/styles";
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
          <F.StyledLink>
            <NavLink to="/">Home</NavLink>
          </F.StyledLink>
          <F.StyledLink>
            <NavLink to="/sign-in">Sign in</NavLink>
          </F.StyledLink>
          <F.StyledLink>
            <NavLink to="/sign-up">Sign up</NavLink>
          </F.StyledLink>
        </S.Links>
      </S.PagesSection>
    </S.Wrapper>
  );
};

export default Navbar;
