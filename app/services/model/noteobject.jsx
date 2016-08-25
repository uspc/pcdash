import mongoose from 'mongoose';

// Create schema
const noteDBobject = {
    _id: Number,
    value: mongoose.Schema.Types.Mixed
};

console.log('creating schema');

export default mongoose.model('noteobject',noteDBobject,'noteobjects');