"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const user_1 = __importDefault(require("../models/user"));
const NAMESPACE = 'User Controller';
const getUser = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let id = req.query._id;
    return user_1.default.findById(id)
        .exec()
        .then((response) => {
        return res.status(200).json({
            message: 'SUCCESS',
            response: response
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
            error: error
        });
    });
};
const createUser = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], BODY - [${req.body}]`);
    let { _id, user_name, user_role, user_email, user_mobile } = req.body;
    const user = new user_1.default({
        _id,
        user_name,
        user_role,
        user_email,
        user_mobile
    });
    return user
        .save()
        .then((response) => {
        return res.status(200).json({
            message: 'SUCCESS',
            response: response
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
            error: error
        });
    });
};
const updateUser = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let { user_name, user_role, user_email, user_mobile } = req.body;
    var query = { _id: req.query._id };
    let new_query = new Map();
    if (user_name)
        new_query.set('user_name', user_name);
    if (user_role)
        new_query.set('user_role', user_role);
    if (user_email)
        new_query.set('user_email', user_email);
    if (user_mobile)
        new_query.set('user_mobile', user_mobile);
    var newValues = { $set: new_query };
    logging_1.default.info(NAMESPACE, 'Method', newValues);
    return user_1.default.updateOne(query, newValues)
        .exec()
        .then((response) => {
        return res.status(200).json({
            message: 'SUCCESS',
            response: response
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
            error: error
        });
    });
};
const deleteUser = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let id = req.query._id;
    return user_1.default.deleteOne({ _id: id })
        .exec()
        .then((response) => {
        return res.status(200).json({
            message: 'SUCCESS',
            response: response
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
            error: error
        });
    });
};
exports.default = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};
