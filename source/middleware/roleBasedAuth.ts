import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import logging from '../config/logging';
import User from '../models/user';
import ClassRoom from '../models/classroom';
import Roles from "../models/roles"; 

//Available Roles
const ROLES = {
    PRINCIPAL: 'PRINCIPAL',
    TEACHER: 'TEACHER',
    STUDENT: 'STUDENT'
};

const NAMESPACE = 'Auth MiddleWare';

//SCHOOL ENTITY AUTHENTICATION


const auth = async (req: Request, res: Response, next: NextFunction, resource: string) => {
    let requested_user_id = req.query.user_id; 
    let method = req.method; 
    return await User.findById(requested_user_id)
    .exec()
    .then((response) => {
        logging.info(NAMESPACE, " ", response); 
        let role = response?.get('user_role'); 
        let user_id = response?.get('_id');
        let permission =  Roles.find({role: role, resource: resource, method: method})
        .exec()
        .then((response) => {
            logging.info(NAMESPACE, " ", response);
            if(!response[0].get('access')){
                return res.status(401).json({
                    message: "Access Denied"
                });
            }
            else if(role == 'TEACHER' || role == 'STUDENT'){
                if(requested_user_id != user_id){
                    return res.status(401).json({
                        message: "Access Denied"
                    });
                }
            }
        })
        .catch(error => {
            return error; 
        });

    }).catch(error => {
        return error; 
    })

    next();
}


export default {
    auth
};
