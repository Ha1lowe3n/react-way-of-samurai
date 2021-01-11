import React from 'react';

import { Dialogs, Header, Navbar, Profile } from './components';

import './app.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper--content">
        <Profile />
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
