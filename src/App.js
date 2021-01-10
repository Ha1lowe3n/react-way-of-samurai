import React from 'react';

import { Header, Navbar, Profile } from './components';

import './styles/app.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
