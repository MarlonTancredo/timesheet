import * as S from "./styles";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <S.Wrapper>
      <h1>nav bar</h1>
      <S.Links>
        <S.Link>
          <NavLink to="/">home</NavLink>
        </S.Link>
        <S.Link>
          <NavLink to="/sign-in">Sign In</NavLink>
        </S.Link>
        <S.Link>
          <NavLink to="/sign-up">Sign up</NavLink>
        </S.Link>
      </S.Links>
    </S.Wrapper>
  );
};

export default Navbar;
