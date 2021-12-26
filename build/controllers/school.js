"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const school_1 = __importDefault(require("../models/school"));
const NAMESPACE = 'School Controller';
const getSchool = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let _id = req.query._id;
    return school_1.default.findById({
        _id: _id
    })
        .exec()
        .then((result) => {
        return res.status(200).json({
            message: 'SUCCESS',
            response: result
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
            error: error
        });
    });
};
const createSchool = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let { _id, school_name, created_user } = req.body;
    let school = new school_1.default({
        _id: _id,
        school_name: school_name,
        created_user: created_user
    });
    return school
        .save()
        .then((response) => {
        return res.status(200).json({
            response: response,
            message: 'SUCCESS'
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
            error: error
        });
    });
};
const updateSchool = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let id = req.query._id;
    let { school_name, created_user } = req.body;
    let query = {
        _id: id
    };
    let new_values = new Map();
    if (school_name)
        new_values.set('school_name', school_name);
    if (created_user)
        new_values.set('created_user', created_user);
    let new_query = { $set: new_values };
    return school_1.default.updateOne(query, new_query)
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
const deleteSchool = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let _id = req.query._id;
    return school_1.default.deleteOne({ _id: _id })
        .exec()
        .then((response) => {
        return res.status(200).json({
            classroom: response,
            message: 'SUCCESS'
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
            classroom: null,
            error: error
        });
    });
};
exports.default = {
    getSchool,
    createSchool,
    updateSchool,
    deleteSchool
};
