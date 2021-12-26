import mongoose, { Schema } from 'mongoose';
import User from '../interfaces/user';

const UserSchema: Schema = new Schema(
    {
        _id: { type: String, required: true },
        user_name: { type: String, required: true },
        user_role: { type: String, required: true },
        user_email: { type: String, required: true },
        user_mobile: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<User>('User', UserSchema);
