"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const school_1 = __importDefault(require("../controllers/school"));
const router = express_1.default.Router();
router.get('/get', school_1.default.getSchool);
router.post('/create', school_1.default.createSchool);
router.put('/update', school_1.default.updateSchool);
router.delete('/delete', school_1.default.deleteSchool);
exports.default = router;
