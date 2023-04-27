const mongooseSchema = require("mongoose");

const UserSchema = mongooseSchema.Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  confirmEmail: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmPassword: {
    type: String,
    require: true,
  },
});

const NewUser = mongooseSchema.model("users", UserSchema);

module.exports = NewUser;
