import * as F from "../styles/buttons/styles";

const FormButton = ({ name, formButtonClick }) => {
  return (
    <F.FormButtomWrapper>
      <F.FormButton onClick={formButtonClick}>{name}</F.FormButton>
    </F.FormButtomWrapper>
  );
};

export default FormButton;
