import styled from "styled-components";

import colors from "../colors/styles";

export const SignUpButtomWrapper = styled.div``;

export const SignUpButton = styled.button`
  font-size: 16px;
  color: ${colors.fullGrey};
  margin-top: 1.5rem;
  height: 2.5rem;
  width: 25%;
  border: 1px ${colors.grey} solid;
  border-radius: 2px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: ${colors.grey};
  }
`;
