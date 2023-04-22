import { useReducer, useEffect, useState } from "react";

import Axios from "axios";

import * as F from "../styles/forms/styles";

import FormButton from "../form-button/FormButton";

const usersUrl = "http://localhost:3001/users";

type InitialState = {
  name: string;
  surname: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

type State = {
  name?: string;
  surname?: string;
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
};

type Action = {
  type?: string;
  value?: string;
};

type Users = {
  name?: string;
  surname?: string;
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
};

const initialState: InitialState = {
  name: "",
  surname: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
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

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, surname, email, confirmEmail, password, confirmPassword } =
    state;
  const [users, setUsers] = useState<Users[]>([]);

  const getUsers = async () => {
    try {
      const users = await Axios.get(usersUrl);
      const data = await users.data;
      setUsers(data);
    } catch (error) {
      console.log("Error while trying to fecth data!", error);
    }
  };

  const saveUser = (
    name: string | undefined,
    surname: string | undefined,
    email: string | undefined,
    confirmEmail: string | undefined,
    password: string | undefined,
    confirmPassword: string | undefined
  ) => {
    try {
      Axios.post(usersUrl, {
        name: name,
        surname: surname,
        email: email,
        confirmEmail: confirmEmail,
        password: password,
        confirmPassword: confirmPassword,
      });
      alert("Data entered!");
    } catch (err) {
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
      alert("You must to fill all fields!");
      clearAllFields();
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords must to be equal!");
      clearPasswordFields();
      return;
    }

    if (email !== confirmEmail) {
      alert("E-mails must to be equals!");
      clearEmailFields();
      return;
    }

    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email) {
        alert("This e-mail already exists, please enter a different one!");
        clearEmailFields();
        return;
      }
    }

    saveUser(name, surname, email, confirmEmail, password, confirmPassword);

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
          max="30"
          type="text"
          autoComplete="given-name"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Last Name</F.FieldsNames>
        <F.Input
          value={surname}
          name="surname"
          max="30"
          type="text"
          autoComplete="family-name"
          onChange={handleOnChange}
        />
        <F.FieldsNames>E-mail</F.FieldsNames>
        <F.Input
          value={email}
          name="email"
          max="50"
          type="email"
          autoComplete="email"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Confirm E-mail</F.FieldsNames>
        <F.Input
          value={confirmEmail}
          name="confirmEmail"
          max="50"
          type="email"
          autoComplete="off"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input
          value={state.password}
          name="password"
          max="30"
          type="password"
          autoComplete="new-password"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Confirm Password</F.FieldsNames>
        <F.Input
          value={confirmPassword}
          name="confirmPassword"
          max="30"
          type="password"
          autoComplete="new-password"
          onChange={handleOnChange}
        />
        <FormButton formButtonClick={handleAddUser} name="Sign up" />
      </F.FormWrapper>
    </F.Wrapper>
  );
};

export default SignUp;
