import { useEffect, useState } from "react";

import Axios from "axios";

import * as F from "../styles/forms/styles";
import * as S from "./styles";

import FormButton from "../form-button/FormButton";

const usersPath = "http://localhost:3001/users";

const SignIn = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUsers = async () => {
    try {
      const users = await Axios.get(usersPath);
      const data = await users.data;
      setUsers(data);
    } catch (error) {
      console.log(error, "Error while fetching user!");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const clearAllField = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignButton = () => {
    let answer = "";
    if (email === "") {
      alert("You did not enter your e-mail.");
      return;
    }

    if (password === "") {
      alert("You did not enter your password.");
      return;
    }

    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        answer = `Welcome! ${users[i].name} ${users[i].surname}`;
        break;
      } else {
        answer = "Your e-mail and password doesn't match";
        clearAllField();
      }
    }

    alert(answer);
  };

  return (
    <F.Wrapper>
      <F.FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <F.Title>Sign in</F.Title>
        <F.Break />
        <F.FieldsNames>E-mail</F.FieldsNames>
        <F.Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          autoComplete="email"
        />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="current-password"
        />
        <S.ButtonSection>
          <S.SignInSection>
            <FormButton name="Sign in" formButtonClick={handleSignButton} />
          </S.SignInSection>
          <S.SignUpSection>
            <FormButton name="Sign up" />
          </S.SignUpSection>
        </S.ButtonSection>
      </F.FormWrapper>
    </F.Wrapper>
  );
};

export default SignIn;
