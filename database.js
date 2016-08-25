import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/pckan',() =>{
    console.log("connected to db...");
})


