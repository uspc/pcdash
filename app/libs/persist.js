import helper from '../services/requesthelper';
import storagefn from './storage';

export default function(alt, storage, storageName) {
  try {
      if(localStorage.getItem(storageName)=== null)
    {
      alt.bootstrap(JSON.stringify(storage.get(storageName)));
    }
    else
    {
      alt.bootstrap(localStorage.getItem(storageName));

      // error handler is passed to ensure the session storage is written back to local incase of failure
      helper.post('/api/data',localStorage.getItem(storageName),errorhandle);
      localStorage.clear();
    }


  }
  catch(e) {
    console.error('Failed to bootstrap data', e);
  }

  alt.FinalStore.listen(() => {
    console.log('persist - listen called');

    //push data to db...
    helper.post('/api/data',alt.takeSnapshot(),errorhandle);

    if(!storage.get('debug')) {
      storage.set(storageName, alt.takeSnapshot());
    }
  });

  const errorhandle = (e) => {
    localStorage.setItem(storageName,alt.takeSnapshot());
    console.log('local storage written'+localStorage.getItem(storageName));
  }
}


