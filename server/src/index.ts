const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

require("dotenv").config();

type User = {
  name: string;
  surname: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

const app = express();
app.use(express.json());
app.use(cors());

const DBPORT = process.env.DBPORT;
mongoose
  .connect(DBPORT)
  .then(() => {
    console.log("Database conected!");
  })
  .catch((err: any) => {
    console.log("Error: " + err);
  });

const addUser = () => {
  app.post(
    "/users",
    async (req: { body: User }, res: { send: (message: string) => void }) => {
      const name = req.body.name;
      const surname = req.body.surname;
      const email = req.body.email;
      const confirmEmail = req.body.confirmEmail;
      const password = req.body.password;
      const confirmPassword = req.body.confirmPassword;

      const user = new UserModel({
        name: name,
        surname: surname,
        email: email,
        confirmEmail: confirmEmail,
        password: password,
        confirmPassword: confirmPassword,
      });
      try {
        await user.save();
        res.send("Data inserted!");
      } catch (err) {
        console.log("Error: " + err);
      }
    }
  );
};

const getAllUsers = () => {
  app.get(
    "/users",
    async (req: { body: User }, res: { send: (users: User) => void }) => {
      try {
        const users: User = await UserModel.find({});
        res.send(users);
      } catch (err) {
        console.log(err);
      }
    }
  );
};

const deleteUser = () => {
  app.delete("/users/:id", async (req: { params: { id: number } }) => {
    const id = req.params.id;

    try {
      await UserModel.deleteOne({ _id: id });
    } catch (err) {
      console.log("error", err);
    }
  });
};

const updateUser = () => {
  app.put(
    "/users/:id",
    async (
      req: { params: { id: number }; body: { name: string } },
      res: string
    ) => {
      const id = req.params.id;
      const name = req.body.name;
      try {
        await UserModel.findByIdAndUpdate(id, { name: name });
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  );
};

addUser();
getAllUsers();
deleteUser();
updateUser();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
