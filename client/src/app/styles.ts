import styled from "styled-components";
import colors from "../components/styles/colors/styles";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 3rem;
`;

//Navbar
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: ${colors.fullGrey};
  color: ${colors.white};
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
