import { Document } from 'mongoose';

export default interface ClassRoom extends Document {
    _id: string;
    school_id: string;
    class_name: string;
    created_user: string;
    is_deleted: boolean;
}
