import mongoose, { Schema } from 'mongoose';
import Roles from '../interfaces/roles';

const RolesSchema: Schema = new Schema({
    role: { type: String, required: true },
    resource: { type: String, required: true },
    method: { type: String, required: true },
    access: { type: Boolean, required: true }
});

export default mongoose.model<Roles>('Roles', RolesSchema);
