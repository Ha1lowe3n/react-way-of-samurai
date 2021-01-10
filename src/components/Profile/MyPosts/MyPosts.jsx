import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
