import NoteActions from '../actions/NoteActions';
import helper from '../services/requesthelper';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];

    //this.notes = [{id:'63e13d49-b139-4381-111111111',task:'DB_NXX_1'},
    //  {id:'e36c1dea-90cd-4b4a-ffffffff',task:'DB_NXX_2'}];
    //
    //helper.get('api/data?id=111').then(data=>{
    //  this.notes = { notes:data[0].value }
    //
    //  this.setState({notes:data[0].value});
    //  console.log('notes value '+JSON.stringify(this.notes));
    //})

    console.log('notes value while leaving const '+this.notes);
  }
  create(note) {

    //helper.get('/api/data').then(data => {
    //  note.task = data.message;
    //  this.setState({
    //    notes: this.notes.concat(note)
    //  });
    //})




    //const temp = JSON.stringify(this.notes.concat(note));
    //helper.post('/api/data',temp).then(data => {
    //  this.setState({
    //    notes: data
    //  });
    //})

    this.setState({
      notes: this.notes.concat(note)
    });

  }
  update(updatedNote) {

    this.setState({
      notes: this.notes.map(note => {
        if(note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }
        return note;
      })
    });

    // Temp logic to add json value to DB
    //var value =[{
    //  'id': '63e13d49-b139-4381-a719-111111111',
    //  'task': 'DB_NOTE_1'
    //},
    //    {
    //        'id': 'e36c1dea-90cd-4b4a-85fa-ffffffff',
    //        'task': 'DB_NOTE_2'
    //        }]
    //
    //
    //helper.post('api/setdata',JSON.stringify(value));

    //Temp logic to add complete initial value object

    //var value = {
    //  NoteStore: {
    //    notes:[
    //            {id:'63e13d49-b139-4381-111111112',task:'DB_DB1'},
    //            {id:'e36c1dea-90cd-4b4a-fffffffe',task:'DB_DB2'}
    //          ]
    //  },
    //  LaneStore:{
    //    lanes:[{id:'1ea94a9a-ee9e-4e25-a1cb-194f8a1ac250',
    //            name: 'DB Lane',
    //            notes: ['63e13d49-b139-4381-111111112','e36c1dea-90cd-4b4a-fffffffe']
    //    }]
    //  }
    //}
    //helper.post('api/setdata',JSON.stringify(value));



     // const tempnotes = this.notes.map(note => {
     //   if(note.id === updatedNote.id) {
     //     return Object.assign({}, note, updatedNote);
     //   }
     //   return note;
     // });
     //
     //helper.post('/api/data',JSON.stringify(tempnotes)).then(data => {
     // this.setState({
     //   notes: data
     //   });
     //});



    console.log('notestore - update '+JSON.stringify(this.notes));

  }
  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }

  loadInitial(){
    console.log('loading db initial value');
  }
}
