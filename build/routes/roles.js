"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roles_1 = __importDefault(require("../controllers/roles"));
const router = express_1.default.Router();
router.get('/get', roles_1.default.getRoles);
router.post('/create', roles_1.default.createRoles);
exports.default = router;
