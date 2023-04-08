import * as F from "../styles/forms/styles";
import * as S from "./styles";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <F.Wrapper>
      <S.StyledLink>
        <Link to={"/sign-in"}>Enter your login</Link>
        <Link to={"/sign-up"}>Still not registerd?</Link>
      </S.StyledLink>
    </F.Wrapper>
  );
};

export default HomePage;
