"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const classroom_1 = __importDefault(require("../models/classroom"));
const NAMESPACE = 'ClassRooom Controller';
const getClassRoom = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let _id = req.query._id;
    return classroom_1.default.find({
        _id: _id,
        is_deleted: false
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
const createClassRoom = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let { _id, school_id, class_name, created_user } = req.body;
    let classRoom = new classroom_1.default({
        _id: _id,
        school_id: school_id,
        class_name: class_name,
        created_user: created_user,
        is_deleted: false
    });
    return classRoom
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
const updateClassRoom = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let id = req.query._id;
    let { school_id, class_name, created_user } = req.body;
    let query = {
        _id: id
    };
    let new_values = new Map();
    if (school_id)
        new_values.set('school_id', school_id);
    if (class_name)
        new_values.set('class_name', class_name);
    if (created_user)
        new_values.set('created_user', created_user);
    let new_query = { $set: new_values };
    return classroom_1.default.updateOne(query, new_query)
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
const deleteClassRoom = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let _id = req.query._id;
    return classroom_1.default.deleteOne({ _id: _id })
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
    getClassRoom,
    createClassRoom,
    updateClassRoom,
    deleteClassRoom
};
