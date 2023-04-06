import styled from "styled-components";

import colors from "../styles/colors/styles";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: ${colors.grey};
  color: ${colors.fullGrey};
  width: 100%;
  height: auto;
  align-items: center;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Link = styled.li`
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
