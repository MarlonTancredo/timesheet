"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var User_1 = __importDefault(require("./models/User"));
require("dotenv").config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var DB_PORT = process.env.DB_PORT;
mongoose_1.default
    .connect(DB_PORT)
    .then(function () {
    console.log("Database conected!");
})
    .catch(function (err) {
    console.log("Error: " + err);
});
app.post("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, surname, email, confirmEmail, password, confirmPassword, isLogged, user, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, surname = _a.surname, email = _a.email, confirmEmail = _a.confirmEmail, password = _a.password, confirmPassword = _a.confirmPassword, isLogged = _a.isLogged;
                user = new User_1.default({
                    name: name,
                    surname: surname,
                    email: email,
                    confirmEmail: confirmEmail,
                    password: password,
                    confirmPassword: confirmPassword,
                    isLogged: isLogged,
                });
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                res.send("Data inserted!");
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.status(400).send("Sorry, cant find that");
                console.log("Error: " + err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User_1.default.find({})];
            case 1:
                users = _a.sent();
                res.send(users);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.delete("/users/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.deleteOne({ _id: id })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.log("error", err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put("/users/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, name, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                name = req.body.name.name;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(id, { name: name })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.log("Error: ", err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT, "..."));
});
