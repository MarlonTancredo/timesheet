import { useEffect, useState } from "react";
import * as S from "./styles";

import SignUpButtom from "../sign-up-buttom/SignUpButtom";

import Axios from "axios";

const usersPath = "http://localhost:3001/users";

const SignUp = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
  });

  const clearAllfields = () => {
    setName("");
    setSurname("");
    setEmail("");
    setConfirmEmail("");
    setPassword("");
    setConfirmPassword("");
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
      clearAllfields();
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords must to be equal!");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    if (email !== confirmEmail) {
      alert("E-mails must to be equals!");
      setEmail("");
      setConfirmEmail("");
      return;
    }

    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email) {
        alert("This e-mail already exists, please enter a different one!");
        setEmail("");
        setConfirmEmail("");
        return;
      }
    }

    saveUser(name, surname, email, confirmEmail, password, confirmPassword);

    clearAllfields();
  };

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.Title>Sign up</S.Title>
        <S.Break />
        <S.FieldsNames>Name</S.FieldsNames>
        <S.Input
          value={name}
          maxLength="30"
          type="text"
          autoComplete="given-name"
          onChange={(e) => setName(e.target.value)}
        />
        <S.FieldsNames>Last Name</S.FieldsNames>
        <S.Input
          value={surname}
          maxLength="30"
          type="text"
          autoComplete="family-name"
          onChange={(e) => setSurname(e.target.value)}
        />
        <S.FieldsNames>E-mail</S.FieldsNames>
        <S.Input
          value={email}
          maxLength="50"
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.FieldsNames>Confirm E-mail</S.FieldsNames>
        <S.Input
          value={confirmEmail}
          maxLength="50"
          type="email"
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <S.FieldsNames>Password</S.FieldsNames>
        <S.Input
          value={password}
          maxLength="30"
          type="password"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.FieldsNames>Confirm Password</S.FieldsNames>
        <S.Input
          value={confirmPassword}
          maxLength="30"
          type="password"
          autoComplete="new-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SignUpButtom signUpClick={handleAddUser} name="Sign up" />
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default SignUp;
