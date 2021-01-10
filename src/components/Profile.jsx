import React from "react";

// import "./Profile.scss";

function Profile() {
  return (
    <div className="content">
      <div>
        <img
          src="https://img3.goodfon.ru/original/1920x1200/a/f0/pesok-plyazh-sledy-more-palmy.jpg"
          alt="wrapper"
        />
      </div>
      <div>ava + descr</div>
      <div>
        my posts
        <div>new post</div>
        <div className="posts">
          <div className="item">1 post</div>
          <div className="item">2 post</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
