import * as F from "../styles/forms/styles";
import * as S from "./styles";

import {
  succesAlert,
  fillFields,
  wrongLogin,
  noDataBase,
} from "../alerts/alerts";

import FormButton from "../form-button/FormButton";

import Axios from "axios";

import { useReducer, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type InitialState = {
  email: string;
  password: string;
};

type State = {
  email?: string;
  password?: string;
};

type Action = {
  type?: string;
  value?: string;
};

type Users = {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
};

const reducer = (state: State, action: Action): State => {
  const { type, value } = action;
  switch (type) {
    case "email":
      return { ...state, email: value };
    case "password":
      return { ...state, password: value };
    case "clear-all-fields":
      return { ...state, email: "", password: "" };
    default:
      return { ...state };
  }
};

const initialState: InitialState = {
  email: "",
  password: "",
};

const usersPath = "http://localhost:3001/users";

const SignIn = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password } = state;

  const [users, setUsers] = useState<Users[]>([]);

  const getUsers = async () => {
    try {
      const users = await Axios.get(usersPath);
      const data = await users.data;
      setUsers(data);
    } catch (error) {
      console.log(error);
      noDataBase("No response!");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const clearAllField = () => {
    const action = { type: "clear-all-fields" };
    dispatch(action);
  };

  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const action = { type: e.target.name, value: e.target.value };
    dispatch(action);
  };

  const handleSignButton = () => {
    if (email === "") {
      fillFields("You must to enter your e-mail!");
      return;
    }

    if (password === "") {
      fillFields("You must to enter your password!");
      return;
    }

    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        succesAlert("Login success!");
        break;
      } else {
        wrongLogin("Wrong login!");
        clearAllField();
      }
    }
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
          name="email"
          type="text"
          maxLength={30}
          autoComplete="email"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input
          value={password}
          name="password"
          type="password"
          maxLength={30}
          autoComplete="current-password"
          onChange={handleOnChange}
        />
        <S.ButtonSection>
          <S.SignInSection>
            <FormButton name="Sign in" formButtonClick={handleSignButton} />
          </S.SignInSection>
          <S.SignUpSection>
            <Link to="/sign-up">
              <FormButton name="Sign up" />
            </Link>
          </S.SignUpSection>
        </S.ButtonSection>
      </F.FormWrapper>
    </F.Wrapper>
  );
};

export default SignIn;
