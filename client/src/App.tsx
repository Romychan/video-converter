import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { setupStore } from '@store/store';
import { AppRouter } from '@router/AppRouter';

import './assets/styles/style.scss';

const App = () => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
