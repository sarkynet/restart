// models/admin.ts
import mongoose, { Schema } from 'mongoose';
let AdminSchema: Schema = new Schema({
    name: {
        type: String
    },
    artist: {
        type: String
    }
}, {
    collection: 'admin'
})
export default mongoose.model('Admin', AdminSchema);