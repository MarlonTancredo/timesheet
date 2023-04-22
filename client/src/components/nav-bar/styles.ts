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

export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 1.6rem;
`;

export const Title = styled.h2``;

export const PagesSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;
