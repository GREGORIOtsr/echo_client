import React from "react";
import { Link } from "react-router-dom";

const Post = ({ pic, name, user, body, date }) => {
  return (
    <article className="post-container">
      <div className="user-container">
        <Link to={`/profile/${user}`}><img src={pic} alt={user + ' profile picture.'} /></Link>
        <div className="username-container">
          <h5>{name}</h5>
          <Link to={`/profile/${user}`} className="user-link">{'@' + user}</Link>
        </div>
      </div>
      <p className="post-body">{body}</p>
      <p className="post-date">{date}</p>
    </article>
  );
};

export default Post;
