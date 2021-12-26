"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controllers/user"));
const router = express_1.default.Router();
router.get('/get', user_1.default.getUser);
router.post('/create', user_1.default.createUser);
router.put('/update', user_1.default.updateUser);
router.delete('/delete', user_1.default.deleteUser);
module.exports = router;
