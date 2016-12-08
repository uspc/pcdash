import mongoose from 'mongoose';

// Create schema
const noteDBobject = {
    _id: Number,
    value: mongoose.Schema.Types.Mixed
};

export default mongoose.model('noteobject',noteDBobject,'noteobjects');