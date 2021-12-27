import { Document } from 'mongoose';

export default interface Roles extends Document {
    role: string;
    resource: string;
    method: string;
    access: boolean;
}
