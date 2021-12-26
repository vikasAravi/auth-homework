import mongoose, { Schema } from 'mongoose';
import ClassRoom from '../interfaces/classroom';

const ClassRoomSchema: Schema = new Schema(
    {
        _id: { type: String, required: true },
        school_id: { type: String, required: true },
        class_name: { type: String, required: true },
        created_user: { type: String, required: true },
        is_deleted: { type: Boolean, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ClassRoom>('ClassRoom', ClassRoomSchema);
