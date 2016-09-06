import mongoose from 'mongoose';
import noteitem from '../services/model/noteitem'
import noteobject from '../services/model/noteobject'


export default (app) => {
    app.route('/api/data')
        .get((req,res) =>{

            //if(typeof req.query.id === 'undefined')
            //{
            //    res.send({id:1,message:'success'});
            //}
            //else
            //{
            //    noteobject.find({_id:req.param('id')},(err,data) =>{
            //        res.send(data);
            //    })
            //}


            if(mongoose.connection.readyState) {
                (typeof req.query.id === 'undefined') ? res.send({
                    id: 1,
                    message: 'DB redy to process but no query Id'
                }) : noteobject.find({_id: req.query.id}, (err, data) => {
                    res.setHeader('Content-Type', 'application/json'), res.send(data);
                })
            }
            else
            {
                res.status(500).send('DB connection fail');
            }

        })
        .post((req,res)=>{
            console.log('received post item'+ JSON.stringify(req.body));
            console.log('DB connection state '+mongoose.connection.readyState);

            if(mongoose.connection.readyState)
            {
                console.log('working with db object');
                 noteobject.findOne({_id:101},(err,note)=>{
                    if(!err)
                    {
                        console.log('item data - find one'+err);
                        if(!note){
                            console.log('no object found adding new');
                            new noteobject({'_id':101,'value':req.body}).save();
                        }
                        else
                        {
                            console.log('reterivied note'+JSON.stringify(note.value));
                            noteobject.update({_id:101},{'_id':101,'value':req.body},{upsert:true},(err, numberAffected, raw)=>{
                                console.log('update log'+err+' -- '+numberAffected+' -- '+raw);
                            })
                        }
                        res.send(req.body);
                    }
                     else
                    {
                        console.log('ERROR-DB'+err);
                        res.send(500,err);
                    }
                })
            }
            else
            {
                res.status(500).send('DB connection fail');
            }
            console.log('After findone');

        })


    app.route('/api/setdata')
    .get((req,res)=>{
            new noteobject({'_id':req.query.id,'value':req.query.value}).save(err=>{
                console.log('error while updating'+err);
            })
    })
    .post((req,res)=>{
            new noteobject({_id:222,'value':req.body}).save();
        })
}