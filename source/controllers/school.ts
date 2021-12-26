import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import School from '../models/school';

const NAMESPACE = 'School Controller';

const getSchool = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);

    let _id = req.query._id;
    return School.findById({
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

const createSchool = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);

    let { _id, school_name, created_user } = req.body;

    let school = new School({
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

const updateSchool = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);

    let id = req.query._id;

    let { school_name, created_user } = req.body;

    let query = {
        _id: id
    };

    let new_values = new Map();
    if (school_name) new_values.set('school_name', school_name);
    if (created_user) new_values.set('created_user', created_user);

    let new_query = { $set: new_values };

    return School.updateOne(query, new_query)
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

const deleteSchool = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);

    let _id = req.query._id;

    return School.deleteOne({ _id: _id })
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

export default {
    getSchool,
    createSchool,
    updateSchool,
    deleteSchool
};
