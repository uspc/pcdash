import mongoose from 'mongoose';

// Create schema
const noteSchema = {
    id:String,
    task:String
};

console.log('creating schema');
//const noteitem =

export default mongoose.model('noteItem',noteSchema,'noteitems');