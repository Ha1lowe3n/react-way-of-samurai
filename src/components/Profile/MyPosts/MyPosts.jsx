import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

const postsData = [
  { id: 1, message: "Hello", likeCount="9" },
  { id: 2, message: "Hi", likeCount="7" },
];

function MyPosts() {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
        <Post message={postsData[1].message} likeCount={postsData[1].likeCount} />
      </div>
    </div>
  );
}

export default MyPosts;
