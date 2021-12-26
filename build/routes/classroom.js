"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const classroom_1 = __importDefault(require("../controllers/classroom"));
const router = express_1.default.Router();
router.get('/get', classroom_1.default.getClassRoom);
router.post('/create', classroom_1.default.createClassRoom);
router.put('/update', classroom_1.default.updateClassRoom);
router.delete('/delete', classroom_1.default.deleteClassRoom);
exports.default = router;
