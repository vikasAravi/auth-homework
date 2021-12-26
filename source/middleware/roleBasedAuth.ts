import mongoose from "mongoose"; 
import { Request, Response, NextFunction} from "express-serve-static-core";
import logging from "../config/logging"; 
import User from "../models/user"; 
import ClassRoom from "../models/classroom"; 

//Available Roles 
const ROLES = {
    "PRINCIPAL": "PRINCIPAL", 
    "TEACHER": "TEACHER",
    "STUDENT": "STUDENT"
}

const NAMESPACE = "Auth MiddleWare"; 


//SCHOOL ENTITY AUTHENTICATION 
const schoolAuth = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.query.user_id)
        return res.status(401).json({
            "message": "No Permission to use this resource"
        });
    await User.findById(req.query.user_id).
                    exec()
                    .then(response => {
                        logging.info(NAMESPACE, " ", response); 
                        if(response?.get('user_role') != ROLES.PRINCIPAL){
                            return res.status(401).json({
                                "message": "No Permission to use this resource"
                            });
                        }
                    })
    next(); 
    
}


// CLASSROOM ENTITY AUTHENTICATION 
/**
 * Conditions : Any one of them is good 
 * 1. next() - If user has pricipal role
 * 2. next() - If user has teacher role then created user id and requested user id should match 
 * Otherwise access denied 
 */



export default {
    schoolAuth
}