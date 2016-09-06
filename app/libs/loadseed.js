import helper from '../services/requesthelper';
import persist from './persist';
import storage from './storage';
import NoteActions from '../actions/NoteActions';


export default (storageag,k,alt) => {
    //to load initial prebaked data change id to 222


                //helper.get('/api/data?id=101',handlebsuccess,handledbfail(storageag,alt)).then(data => {
                //        storageag.setItem(k,JSON.stringify(JSON.parse(data)[0].value));
                //        console.log('load seed - storage value...'+storageag.getItem(k));
                //        //persist(alt, storage(sessionStorage), 'app');
                //        //NoteActions.loadInitial();
                //})


    helper.get('/api/data?id=101').then((data)=>{postprocessing(k,alt,storageag,data)},()=>{postprocessing(k,alt,storageag)});

}


const postprocessing = (k,alt,storageag,data) => {
    console.log('Load Seed -- Post processing '+data);
    if(typeof data != 'undefined')
        storageag.setItem(k,JSON.stringify(JSON.parse(data)[0].value));
    console.log('load seed - storage value...'+storageag.getItem(k));
    persist(alt, storage(sessionStorage), 'app');
    NoteActions.loadInitial();
}
