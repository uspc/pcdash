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
            (typeof req.query.id === 'undefined') ? res.send({id:1,message:'success'}) : noteobject.find({_id:req.query.id},(err,data) =>{res.send(data);})


        })
        .post((req,res)=>{
            console.log('received post item'+ JSON.stringify(req.body));

             noteobject.findOne({_id:101},(err,note)=>{
                if(!err)
                {
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
                }
            })

            res.send(req.body);
        })
}