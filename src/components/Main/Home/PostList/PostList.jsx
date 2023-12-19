import React from "react";
import { v4 as uuidv4 } from "uuid";
import Post from './Post';
import basePFP from '../../../../assets/default_pfp.png';

const PostList = ({ postList }) => {

  const printPosts = (data) => {
    return data.map(d => (
      <Post 
        key={uuidv4()}
        pic={d.User.profile_picture !== 'default.png' ? d.User.profile_picture : basePFP}
        name={d.User.profile_name !== 'none' ? d.User.profile_name : d.User.username}
        user={d.User.username}
        body={d.body}
        date={d.createdAt.slice(0, 10)}
      />
    ))
  };

  return (
    <section id="post-list">
      {printPosts(postList)}
    </section>
  );
};

export default PostList;
