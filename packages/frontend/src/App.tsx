import React, { useState } from 'react';
import './App.css';
import { LoginPage } from './pages/Login';
import { TrackPage } from './pages/Track';

function App() {
  const [page, setPage] = useState(0)
  return (
    <div className="App">
      {page === 0 ? <LoginPage change={setPage} /> : <TrackPage /> }
    </div>
  );
}

export default App;
