import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

const postsData = [
  { id: 1, message: "Hello", likeCount: "9" },
  { id: 2, message: "Hi", likeCount: "7" },
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
        {postsData.map((p) => (
          <Post message={p.message} likeCount={p.likeCount} />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
