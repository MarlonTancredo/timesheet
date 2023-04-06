import * as S from "./styles";

import { Routes, Route } from "react-router-dom";

import Navbar from "../components/nav-bar/Navbar";
import HomePage from "../components/home-page/HomePage";
import SignIn from "../components/sign-in/SignIn";
import SignUp from "../components/sign-up/SignUp";

const App = () => {
  return (
    <S.AppWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </S.AppWrapper>
  );
};

export default App;
