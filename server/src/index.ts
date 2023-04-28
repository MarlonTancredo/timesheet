import express, { Response, Request } from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/User";

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

const DB_PORT = process.env.DB_PORT;
console.log("test", DB_PORT);
mongoose
  .connect(DB_PORT)
  .then(() => {
    console.log("Database conected!");
  })
  .catch((err: any) => {
    console.log("Error: " + err);
  });

const addUser = () => {
  app.post("/users", async (req: Request, res: Response) => {
    const {
      name,
      surname,
      email,
      confirmEmail,
      password,
      confirmPassword,
    }: User = req.body;

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
  });
};

const getAllUsers = () => {
  app.get("/users", async (req, res: Response) => {
    try {
      const users = await UserModel.find({});
      res.send(users);
    } catch (err) {
      console.log(err);
    }
  });
};

const deleteUser = () => {
  app.delete("/users/:id", async (req: Request, res) => {
    const id = req.params.id;

    try {
      await UserModel.deleteOne({ _id: id });
    } catch (err) {
      console.log("error", err);
    }
  });
};

const updateUser = () => {
  app.put("/users/:id", async (req: Request, res) => {
    const id = req.params.id;
    const name = req.body.name;
    try {
      await UserModel.findByIdAndUpdate(id, { name: name });
    } catch (err) {
      console.log("Error: ", err);
    }
  });
};

addUser();
getAllUsers();
deleteUser();
updateUser();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
