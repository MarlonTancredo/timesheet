import * as F from "../styles/forms/styles";
import * as S from "./styles";

import Axios from "axios";

import { useReducer, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormButton from "../form-button/FormButton";

const usersPath = "http://localhost:3001/users";

type InitialState = {
  email: string;
  password: string;
};

type State = {
  email: string | never | undefined;
  password: string | never | undefined;
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
      console.log(error, "Error while fetching user!");
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
    const email = state.email;
    const password = state.password;
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
          name="email"
          onChange={handleOnChange}
          type="email"
          autoComplete="email"
        />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input
          value={password}
          name="password"
          onChange={handleOnChange}
          type="password"
          autoComplete="current-password"
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