import mongoose, { Schema } from 'mongoose';
import School from '../interfaces/school';

const SchoolSchema: Schema = new Schema(
    {
        _id: { type: String, required: true },
        school_name: { type: String, required: true },
        created_user: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<School>('School', SchoolSchema);
