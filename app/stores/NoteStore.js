import NoteActions from '../actions/NoteActions';
import helper from '../services/requesthelper';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [];
  }
  create(note) {
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
