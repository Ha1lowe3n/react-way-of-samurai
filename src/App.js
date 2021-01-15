import React from 'react';
import { Route } from 'react-router-dom';

import { Dialogs, Header, Navbar, Profile, News, Music, Settings } from './components';

import './app.scss';


function App({ state: { profilePage, dialogsPage }, addPost }) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper--content">
        <Route
          path="/profile"
          render={() =>
            <Profile
              posts={profilePage.postsData}
              addPost={addPost}
            />
          }
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogs={dialogsPage.dialogsData}
              messages={dialogsPage.messagesData}
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
