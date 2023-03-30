import { useReducer, useEffect, useState } from "react";

import Axios from "axios";

import * as F from "../styles/forms/styles";

import FormButton from "../form-button/FormButton";

const usersPath = "http://localhost:3001/users";

const initialState = {
  name: "",
  surname: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

const reducer = (state, action) => {
  if (action.type === "name") {
    return { ...state, name: action.value };
  }
  if (action.type === "surname") {
    return { ...state, surname: action.value };
  }
  if (action.type === "email") {
    return { ...state, email: action.value };
  }
  if (action.type === "confirmEmail") {
    return { ...state, confirmEmail: action.value };
  }
  if (action.type === "password") {
    return { ...state, password: action.value };
  }
  if (action.type === "confirmPassword") {
    return { ...state, confirmPassword: action.value };
  }
  if (action.type === "clear-all-fields") {
    return {
      ...state,
      name: "",
      surname: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    };
  }
  if (action.type === "clear-email-fields") {
    return { ...state, email: "", confirmEmail: "" };
  }
  if (action.type === "clear-password-fields") {
    return { ...state, password: "", confirmPassword: "" };
  }
  return { ...state };
};

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const users = await Axios.get(usersPath);
      const data = await users.data;
      setUsers(data);
    } catch (error) {
      console.log("Error while trying to fecth data!", error);
    }
  };

  const saveUser = (
    name,
    surname,
    email,
    confirmEmail,
    password,
    confirmPassword
  ) => {
    try {
      Axios.post(usersPath, {
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

  const handleOnChange = (e) => {
    const action = {
      type: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const handleAddUser = () => {
    const name = state.name;
    const surname = state.surname;
    const email = state.email;
    const confirmEmail = state.confirmEmail;
    const password = state.password;
    const confirmPassword = state.confirmPassword;

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
          value={state.name}
          name="name"
          maxLength="30"
          type="text"
          autoComplete="given-name"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Last Name</F.FieldsNames>
        <F.Input
          value={state.surname}
          name="surname"
          maxLength="30"
          type="text"
          autoComplete="family-name"
          onChange={handleOnChange}
        />
        <F.FieldsNames>E-mail</F.FieldsNames>
        <F.Input
          value={state.email}
          name="email"
          maxLength="50"
          type="email"
          autoComplete="email"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Confirm E-mail</F.FieldsNames>
        <F.Input
          value={state.confirmEmail}
          name="confirmEmail"
          maxLength="50"
          type="email"
          autoComplete="off"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input
          value={state.password}
          name="password"
          maxLength="30"
          type="password"
          autoComplete="new-password"
          onChange={handleOnChange}
        />
        <F.FieldsNames>Confirm Password</F.FieldsNames>
        <F.Input
          value={state.confirmPassword}
          name="confirmPassword"
          maxLength="30"
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
