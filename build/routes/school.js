"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const school_1 = __importDefault(require("../controllers/school"));
const roleBasedAuth_1 = __importDefault(require("../middleware/roleBasedAuth"));
const router = express_1.default.Router();
router.get('/get', roleBasedAuth_1.default.schoolAuth && roleBasedAuth_1.default.schoolAuth, school_1.default.getSchool);
router.post('/create', roleBasedAuth_1.default.schoolAuth, school_1.default.createSchool);
router.put('/update', roleBasedAuth_1.default.schoolAuth, school_1.default.updateSchool);
router.delete('/delete', roleBasedAuth_1.default.schoolAuth, school_1.default.deleteSchool);
exports.default = router;
