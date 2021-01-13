import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

function MyPosts({ posts }) {
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
        {posts.map((p, i) => (
          <Post key={`${p}_${i}`} message={p.message} likeCount={p.likeCount} />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
