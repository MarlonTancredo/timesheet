import * as S from "./styles";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <S.Wrapper>
      <h1>Time Sheet</h1>
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
    </S.Wrapper>
  );
};

export default Navbar;
