import styled, { keyframes } from "styled-components";

import colors from "../colors/styles";

export const Wrapper = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  box-shadow: 0 6px 20px 0 ${colors.grey};
  padding: 1rem;
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  color: ${colors.fullGrey};
  font-size: 35px;
  margin-bottom: 0.5rem;
`;

export const Break = styled.div`
  border-bottom: ${colors.grey} solid 1px;
  margin-bottom: 3rem;
`;

export const FieldsNames = styled.label`
  color: ${colors.fullGrey};
  margin-bottom: 0;
`;

export const Input = styled.input`
  outline: none;
  height: 3rem;
  margin-bottom: 1rem;
  border: ${colors.grey} solid 1px;
  border-radius: 0.25em;
`;

export const StyledLink = styled.div`
  a {
    margin-right: 2rem;
    text-decoration: transparent;
    color: ${colors.white};
    cursor: pointer;
    transition: 0.3s;
  }
  a:hover {
    text-decoration: underline;
  }
`;

//Home page styles
const leftSlide = keyframes`
 from { 
  transform: translateX(-400px);
 }
 to { 
  transform: translateX(0px);
 }
 `;

export const HomeWrapper = styled(Wrapper)`
  animation-name: ${leftSlide};
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;

export const HomeStyledLink = styled(StyledLink)`
  a {
    color: ${colors.fullGrey};
  }
`;
