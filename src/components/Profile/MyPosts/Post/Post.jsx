import React from "react";

import classes from "./Post.module.scss";

function Post({ message, likesCount }) {
  return (
    <div className={classes.item}>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/1640581/pub_5e0497c82beb4900ad59a2d0_5e04996e028d6800ac20ec89/scale_1200" />
      {message}
      <div>
        <span>like {likesCount}</span>
      </div>
    </div>
  );
}

export default Post;
