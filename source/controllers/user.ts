import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import User from '../models/user';

const NAMESPACE = 'User Controller';

const getUser = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let id = req.query._id;
    return User.findById(id)
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

const createUser = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], BODY - [${req.body}]`);

    let { _id, user_name, user_role, user_email, user_mobile } = req.body;
    const user = new User({
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

const updateUser = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let { user_name, user_role, user_email, user_mobile } = req.body;
    var query = { _id: req.query._id };
    let new_query = new Map();
    if (user_name) new_query.set('user_name', user_name);
    if (user_role) new_query.set('user_role', user_role);
    if (user_email) new_query.set('user_email', user_email);
    if (user_mobile) new_query.set('user_mobile', user_mobile);

    var newValues = { $set: new_query };

    logging.info(NAMESPACE, 'Method', newValues);

    return User.updateOne(query, newValues)
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

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
    let id = req.query._id;
    return User.deleteOne({ _id: id })
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

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser
};
