import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NoteStore';
import LaneStore from '../../stores/LaneStore';
import loadseed from '../../libs/loadseed';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStore);

  loadseed(sessionStorage,'app',alt);
  //persist(alt, storage(sessionStorage), 'app');
}


