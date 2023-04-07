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
          <S.Link>
            <NavLink to="/">Home</NavLink>
          </S.Link>
          <S.Link>
            <NavLink to="/sign-in">Sign in</NavLink>
          </S.Link>
          <S.Link>
            <NavLink to="/sign-up">Sign up</NavLink>
          </S.Link>
        </S.Links>
      </S.PagesSection>
    </S.Wrapper>
  );
};

export default Navbar;
