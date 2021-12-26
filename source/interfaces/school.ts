import { Document } from 'mongoose';

export default interface School extends Document {
    _id: string;
    school_name: string;
    created_user: string;
}
