"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roles_1 = __importDefault(require("../middleware/roles"));
const roles_2 = __importDefault(require("../models/roles"));
const logging_1 = __importDefault(require("../config/logging"));
const NAMESPACE = 'Roles Controller';
const getRoles = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    return roles_2.default.find()
        .exec()
        .then((response) => {
        return res.status(200).json({
            response: response
        });
    })
        .catch((err) => {
        return res.status(500).json({
            error: err
        });
    });
};
const createRoles = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    const principal_roles = roles_1.default.PRINCIPAL_ROLES;
    let teacher_roles = roles_1.default.TEACHER_ROLES;
    let student_roles = roles_1.default.STUDENT_ROLES;
    for (let role in principal_roles) {
        let role_obj = JSON.parse(role);
        let ROLE = new roles_2.default({
            role: role_obj.get('role'),
            resource: role_obj.get('resource'),
            method: role_obj.get('method'),
            access: role_obj.get('accesss')
        });
        ROLE.save();
    }
};
exports.default = {
    getRoles,
    createRoles
};
