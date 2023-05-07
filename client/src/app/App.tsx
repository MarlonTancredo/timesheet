import * as F from "../components/styles/forms/styles";
import * as S from "./styles";

import HomePage from "../components/home-page/HomePage";
import SignIn from "../components/sign-in/SignIn";
import SignUp from "../components/sign-up/SignUp";
import Aplication from "../components/aplication/Aplication";
import NotFoundPage from "../components/not-found-page/NotFoundPage";

import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [stateIsLogged, setStateStateIsLogged] = useState(false);

  const handleSendToApp = (isLogged: boolean) => {
    setStateStateIsLogged(isLogged);
  };

  const handleSignout = () => {
    setStateStateIsLogged(false);
  };

  return !stateIsLogged ? (
    <S.AppWrapper>
      <S.Wrapper>
        <S.LogoSection>
          <S.Title>Time Sheet</S.Title>
        </S.LogoSection>
        <S.PagesSection>
          <S.Links>
            <F.StyledLink>
              <NavLink to="/">Home</NavLink>
            </F.StyledLink>
            <F.StyledLink>
              <NavLink to="/sign-in">Sign in</NavLink>
            </F.StyledLink>
            <F.StyledLink>
              <NavLink to="/sign-up">Sign up</NavLink>
            </F.StyledLink>
          </S.Links>
        </S.PagesSection>
      </S.Wrapper>
      <S.Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/sign-in"
            element={<SignIn sendToApp={handleSendToApp} />}
          ></Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </S.Content>
    </S.AppWrapper>
  ) : (
    <S.AppWrapper>
      <S.Wrapper>
        <S.LogoSection>
          <S.Title>Time Sheet</S.Title>
        </S.LogoSection>
        <S.PagesSection>
          <S.Links>
            <F.StyledLink>
              <NavLink to="/">Home</NavLink>
            </F.StyledLink>
            <F.StyledLink>
              <NavLink to="/" onClick={handleSignout}>
                Sign out
              </NavLink>
            </F.StyledLink>
          </S.Links>
        </S.PagesSection>
      </S.Wrapper>
      <S.Content>
        <Routes>
          <Route path="/" element={<Aplication />} />
        </Routes>
      </S.Content>
    </S.AppWrapper>
  );
};

export default App;
