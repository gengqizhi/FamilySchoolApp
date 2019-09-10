import React from 'react';
import dva from './Utils/Dva';
import Router from './Routes/Index';

import Home from './Models/Home';
import Mine from './Models/Mine';

const app = dva({
  models: [Home, Mine],
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Router />);

export default App;
