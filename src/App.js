import React from 'react';
import { Route } from 'react-router-dom';

import { Dialogs, Header, Navbar, Profile, News, Music, Settings } from './components';

import './app.scss';


function App({ messages, dialogs, posts }) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper--content">
        <Route
          path="/profile"
          render={() => <Profile posts={posts} />}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs dialogs={dialogs} messages={messages} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
