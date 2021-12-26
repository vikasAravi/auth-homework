import { Document } from 'mongoose';

export default interface User extends Document {
    _id: string;
    user_role: string;
    user_name: string;
    user_email: string;
    user_mobile: string;
}
