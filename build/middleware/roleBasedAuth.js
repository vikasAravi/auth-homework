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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const user_1 = __importDefault(require("../models/user"));
//Available Roles
const ROLES = {
    PRINCIPAL: 'PRINCIPAL',
    TEACHER: 'TEACHER',
    STUDENT: 'STUDENT'
};
const NAMESPACE = 'Auth MiddleWare';
//SCHOOL ENTITY AUTHENTICATION
const schoolAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.user_id)
        return res.status(401).json({
            message: 'No Permission to use this resource'
        });
    yield user_1.default.findById(req.query.user_id)
        .exec()
        .then((response) => {
        logging_1.default.info(NAMESPACE, ' ', response);
        if ((response === null || response === void 0 ? void 0 : response.get('user_role')) != ROLES.PRINCIPAL) {
            return res.status(401).json({
                message: 'No Permission to use this resource'
            });
        }
    });
    next();
});
// STUDENT - USER - [ GET, POST, PUT, DELETE ] - ACCESS PROVIDED
exports.default = {
    schoolAuth
};
