"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
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
    isLogged: {
        type: Boolean,
        require: true,
    },
});
var UserModel = mongoose_1.default.model("users", UserSchema);
exports.default = UserModel;
