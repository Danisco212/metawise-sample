import React from 'react';
import { LoginPage } from './pages/Login';
import { TrackPage } from './pages/Track';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/track' element={<TrackPage />} />
    </Routes>
  );
}

export default App;
