import React from 'react';
import { Route } from 'react-router-dom';

import { Dialogs, Header, Navbar, Profile, News, Music, Settings } from './components';

import './app.scss';


function App({ state: { profile, dialogs }, dispatch }) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper--content">
        <Route
          path="/profile"
          render={() =>
            <Profile
              posts={profile.postsData}
              newPostText={profile.newPostText}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              newMessageText={dialogs.newMessageText}
              dialogs={dialogs.dialogsData}
              messages={dialogs.messagesData}
              dispatch={dispatch}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
