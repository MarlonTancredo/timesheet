import styled from "styled-components";

import colors from "../styles/colors/styles";

export const StyledLink = styled.div`
  a {
    margin-right: 2rem;
    text-decoration: transparent;
    color: ${colors.fullGrey};
    cursor: pointer;
    transition: 1s;
  }
  a:hover {
    text-decoration: underline;
  }
`;
