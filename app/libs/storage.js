export default storage => ({

  tes: console.log('invoked storage intially'),

  get(k) {

    //console.log('storage.js - get '+JSON.stringify(storage));
    try {
      return JSON.parse(storage.getItem(k));
    }
    catch(e) {
      return null;
    }
  },
  set(k, v) {

    console.log('storage.js - set '+storage);
    storage.setItem(k, JSON.stringify(v));
  }
})