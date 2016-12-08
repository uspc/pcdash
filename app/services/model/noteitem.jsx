import mongoose from 'mongoose';

// Create schema
const noteSchema = {
    id:String,
    task:String
};

export default mongoose.model('noteItem',noteSchema,'noteitems');