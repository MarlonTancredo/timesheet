import { useEffect, useState } from "react";

import Axios from "axios";

import * as F from "../styles/forms/styles";

import FormButton from "../form-button/FormButton";

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
  }, []);

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
    <F.Wrapper>
      <F.FormWrapper>
        <F.Title>Sign up</F.Title>
        <F.Break />
        <F.FieldsNames>Name</F.FieldsNames>
        <F.Input
          value={name}
          maxLength="30"
          type="text"
          autoComplete="given-name"
          onChange={(e) => setName(e.target.value)}
        />
        <F.FieldsNames>Last Name</F.FieldsNames>
        <F.Input
          value={surname}
          maxLength="30"
          type="text"
          autoComplete="family-name"
          onChange={(e) => setSurname(e.target.value)}
        />
        <F.FieldsNames>E-mail</F.FieldsNames>
        <F.Input
          value={email}
          maxLength="50"
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <F.FieldsNames>Confirm E-mail</F.FieldsNames>
        <F.Input
          value={confirmEmail}
          maxLength="50"
          type="email"
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <F.FieldsNames>Password</F.FieldsNames>
        <F.Input
          value={password}
          maxLength="30"
          type="password"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <F.FieldsNames>Confirm Password</F.FieldsNames>
        <F.Input
          value={confirmPassword}
          maxLength="30"
          type="password"
          autoComplete="new-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <FormButton formButtonClick={handleAddUser} name="Sign up" />
      </F.FormWrapper>
    </F.Wrapper>
  );
};

export default SignUp;
