import * as F from "../styles/forms/styles";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <F.Wrapper>
      <F.HomeStyledLink>
        <Link to={"/sign-in"}>Enter you login!</Link>
        <Link to={"/sign-up"}>Still not registered?</Link>
      </F.HomeStyledLink>
    </F.Wrapper>
  );
};

export default HomePage;
