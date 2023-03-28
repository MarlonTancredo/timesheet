import styled from "styled-components";

const colors = {
  grey: "#ccc",
  fullGrey: "#444",
};

export const Wrapper = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
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
  height: 3rem;
  margin-bottom: 1rem;
  border: ${colors.grey} solid 1px;
`;
