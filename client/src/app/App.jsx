import * as S from "./styles";

import SignIn from "../components/sign-in/SignIn";
import SignUp from "../components/sign-up/SignUp";

const App = () => {
  return (
    <S.AppWrapper>
      <SignIn />
      <SignUp />
    </S.AppWrapper>
  );
};

export default App;
