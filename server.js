import express from 'express';
import path from 'path';
import itemdata from './app/services/itemdata'
import parser from 'body-parser';
import database from './database';

var app = new express();

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{
    res.send({id:1,message:'success'});
    console.log('req res object'+req);
}).listen(7777,()=>{console.log('Server running on port'+7777);});

// for handing post request from frontend
app.use(parser.json());
app.use(parser.urlencoded({extended:false}))
itemdata(app);
