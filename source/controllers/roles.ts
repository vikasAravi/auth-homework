import Roles from '../middleware/roles';
import RoleModel from '../models/roles';
import logging from '../config/logging';
import { Request, Response, NextFunction } from 'express-serve-static-core';

const NAMESPACE = 'Roles Controller';

const getRoles = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);

    return RoleModel.find()
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

let createRoles = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);

    let principal_roles = Roles.PRINCIPAL_ROLES;
    let teacher_roles = Roles.TEACHER_ROLES;
    let student_roles = Roles.STUDENT_ROLES;
    addRoles(principal_roles); 
    addRoles(teacher_roles); 
    addRoles(student_roles);
    return res.status(200).json({
        message: "SUCCESS"
    });
};


let addRoles = (roles: any) => {
    for (let role in roles) {
        // let role_obj = JSON.parse(principal_roles[role]);
        logging.info(NAMESPACE, " ", roles[role]);
        let role_obj = roles[role]; 
        let ROLE = new RoleModel({
            role: role_obj.role,
            resource: role_obj.resource,
            method: role_obj.method,
            access: role_obj.access

        });
        ROLE.save()
        .then((response) => {
            //logging.info(NAMESPACE, " ", response); 
        })
        .catch((err) => {
            //logging.info(NAMESPACE, " ", err); 
        });
    }
}

export default {
    getRoles,
    createRoles
};
