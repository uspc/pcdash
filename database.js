import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/pckan',(err) =>{

    if(err)
    {
        console.log('DB connection open error '+err);
    }
    else
    {
        console.log("connected to db...");
    }

})


