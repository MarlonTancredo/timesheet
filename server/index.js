const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const UserModel = require("./models/User");

app.use(express.json());
app.use(cors());

//Data base connection.
mongoose
  .connect(
    "mongodb+srv://marlontancredo:marlontancredo123@crud.64d02cm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database conected!");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const addUser = () => {
  app.post("/users", async (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const user = new UserModel({
      name: name,
      surname: surname,
      email: email,
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
  app.get("/users", async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.send(users);
    } catch (err) {
      console.log(err);
    }
  });
};

const deleteUser = () => {
  app.delete("/users/:id", async (req, res) => {
    const id = req.params.id;

    try {
      await UserModel.deleteOne({ _id: id });
    } catch (err) {
      console.log("error", err);
    }
  });
};

const updateUser = () => {
  app.put("/users/:id", async (req, res) => {
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

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
