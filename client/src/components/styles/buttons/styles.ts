import styled from "styled-components";

import colors from "../colors/styles";

export const FormButtomWrapper = styled.div``;

export const FormButton = styled.button`
  font-size: 1em;
  color: ${colors.white};
  margin-top: 1.5rem;
  height: 3rem;
  width: 100%;
  border: none;
  background-color: ${colors.blue};
  border-radius: 0.25em;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: ${colors.hoverBlue};
  }
`;
