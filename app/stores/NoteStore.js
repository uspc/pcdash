import NoteActions from '../actions/NoteActions';
import helper from '../services/requesthelper';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];
  }
  create(note) {

    //helper.get('/api/data').then(data => {
    //  note.task = data.message;
    //  this.setState({
    //    notes: this.notes.concat(note)
    //  });
    //})


    const temp = JSON.stringify(this.notes.concat(note));
    helper.post('/api/data',temp).then(data => {
      this.setState({
        notes: data
      });
    })
  }
  update(updatedNote) {

    //this.setState({
    //  notes: this.notes.map(note => {
    //    if(note.id === updatedNote.id) {
    //      return Object.assign({}, note, updatedNote);
    //    }
    //    return note;
    //  })
    //});


      const tempnotes = this.notes.map(note => {
        if(note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }
        return note;
      });

     helper.post('/api/data',JSON.stringify(tempnotes)).then(data => {
      this.setState({
        notes: data
        });
     });

    console.log('notestore - update '+JSON.stringify(this.notes));

  }
  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }
}
