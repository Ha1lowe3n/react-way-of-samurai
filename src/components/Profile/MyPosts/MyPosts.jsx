import React from "react";

import classes from "./MyPosts.module.scss";

import Post from "./Post/Post";

function MyPosts({ posts, addPost }) {
  const newPost = React.useRef();

  const addNewPost = () => {
    addPost(newPost.current.value);
    newPost.current.value = "";
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPost}></textarea>
        </div>
        <button onClick={addNewPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts.map((p, i) => (
          <Post
            key={`${p}_${i}`}
            message={p.message}
            likesCount={p.likesCount}
          />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
