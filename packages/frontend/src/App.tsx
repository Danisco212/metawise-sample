import React from 'react';
import LoginPage from './pages/Login';
import { TrackPage } from './pages/Track';
import {Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/track' element={<TrackPage />} />
      </Routes>
    </Provider>

  );
}

export default App;
