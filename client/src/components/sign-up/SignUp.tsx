import * as F from "../styles/forms/styles";
import FormButton from "../form-button/FormButton";

import { succesAlert, warningAlert, errorAlert } from "../styles/alerts/alerts";

import { useReducer, useEffect, useState } from "react";

import Axios from "axios";

type State = {
  name?: string;
  surname?: string;
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
  isLogged: boolean;
};

type Action = {
  type?: string;
  value?: string;
};

const reducer = (state: State, action: Action): State => {
  const { type, value } = action;
  switch (type) {
    case "name":
      return { ...state, name: value };
    case "surname":
      return { ...state, surname: value };
    case "email":
      return { ...state, email: value };
    case "confirmEmail":
      return { ...state, confirmEmail: value };
    case "password":
      return { ...state, password: value };
    case "confirmPassword":
      return { ...state, confirmPassword: value };
    case "clear-all-fields":
      return {
        ...state,
        name: "",
        surname: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      };
    case "clear-email-fields":
      return { ...state, email: "", confirmEmail: "" };
    case "clear-password-fields":
      return { ...state, password: "", confirmPassword: "" };
    default:
      return { ...state };
  }
};

type InitialState = {
  name: string;
  surname: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  isLogged: boolean;
};

const initialState: InitialState = {
  name: "",
  surname: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  isLogged: false,
};

type Users = {
  name: string;
  surname: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  isLogged: boolean;
};

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, surname, email, confirmEmail, password, confirmPassword } =
    state;
  const [users, setUsers] = useState<Users[]>([]);

  const usersUrl = "http://localhost:3001/users";
  const getUsers = async () => {
    try {
      const users = await Axios.get(usersUrl);
      const data = await users.data;
      setUsers(data);
    } catch (error) {
      console.log(error);
      errorAlert("No database response!");
    }
  };

  const saveUser = () => {
    try {
      Axios.post(usersUrl, state);
      succesAlert("Sign up success!");
    } catch (err) {
      errorAlert("No database response!");
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const clearAllFields = () => {
    const action = {
      type: "clear-all-fields",
    };
    dispatch(action);
  };

  const clearEmailFields = () => {
    const action = {
      type: "clear-email-fields",
    };
    dispatch(action);
  };

  const clearPasswordFields = () => {
    const action = {
      type: "clear-password-fields",
    };
    dispatch(action);
  };

  const handleOnChange = (e: { target: { name: string; value: string } }) => {
    const action = {
      type: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const handleAddUser = () => {
    if (
      name === "" ||
      surname === "" ||
      email === "" ||
      confirmEmail === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      warningAlert("You must to fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      warningAlert("Password and confirm password must to be the same!");
      clearPasswordFields();
      return;
    }

    if (email !== confirmEmail) {
      warningAlert("Email and confirm email must to be the same!");
      clearEmailFields();
      return;
    }

    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email) {
        warningAlert("This e-mail already exists!");
        clearEmailFields();
        return;
      }
    }
    saveUser();
    clearAllFields();
  };

  return (
    <F.Wrapper>
      <F.FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <F.Title>Sign up</F.Title>
        <F.Break />
        <F.FieldsNames>Name</F.FieldsNames>
        <F.Input
          value={name}
          name="name"
          type="text"
          maxLength={30}
          autoComplete="given-name"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Last Name</F.FieldsNames>
        <F.Input
          value={surname}
          name="surname"
          type="text"
          maxLength={30}
          autoComplete="family-name"
          onChange={handleOnChange}
        />
        <F.FieldsNames>E-mail</F.FieldsNames>
        <F.Input
          value={email}
          name="email"
          type="text"
          maxLength={60}
          autoComplete="email"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Confirm E-mail</F.FieldsNames>
        <F.Input
          value={confirmEmail}
          name="confirmEmail"
          type="text"
          maxLength={60}
          autoComplete="off"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input
          value={password}
          name="password"
          type="password"
          maxLength={60}
          autoComplete="new-password"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Confirm Password</F.FieldsNames>
        <F.Input
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          maxLength={60}
          autoComplete="new-password"
          onChange={handleOnChange}
        />
        <FormButton formButtonClick={handleAddUser} name="Sign up" />
      </F.FormWrapper>
    </F.Wrapper>
  );
};

export default SignUp;
