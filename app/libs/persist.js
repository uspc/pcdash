import helper from '../services/requesthelper';
import storagefn from './storage';

export default function(alt, storage, storageName) {
  try {
    //alt.bootstrap(storage.get(storageName));
    //alt.bootstrap(JSON.stringify(storage.get(storageName)));


    if(localStorage.getItem(storageName)=== null)
    {
      console.log('persistjs - localstorage '+localStorage.getItem(storageName));
      alt.bootstrap(JSON.stringify(storage.get(storageName)));
    }
    else
    {
      console.log('local data found processing....'+localStorage.getItem(storageName));
      alt.bootstrap(localStorage.getItem(storageName));
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
    console.log('error loading data to local'+alt.takeSnapshot());
    localStorage.setItem(storageName,alt.takeSnapshot());
    console.log('local storage written'+localStorage.getItem(storageName));
  }
}


