import React from 'react';

import './app.scss';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://sun9-43.userapi.com/c624116/v624116060/250b7/WB6xXxDpBZA.jpg" />
      </header>

      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className="content">
        <div>
          <img src="https://img3.goodfon.ru/original/1920x1200/a/f0/pesok-plyazh-sledy-more-palmy.jpg" alt="wrapper" />
        </div>
        <div>ava + descr</div>
        <div>
          my posts
          <div>new post</div>
          <div>1 post</div>
          <div>2 post</div>
        </div>

      </div>
    </div>
  );
}

export default App;
