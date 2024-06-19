import React from "react";
import { v4 as uuidv4 } from "uuid";
import Post from './Post';
import basePFP from '../../../../assets/default_pfp.png';

const PostList = ({ postList }) => {

  const printPosts = (data) => {
    return data.map(d => (
      <Post 
        key={uuidv4()}
        pic={d.user.profile_picture !== 'default.png' ? d.user.profile_picture : basePFP}
        name={d.user.profile_name !== 'none' ? d.user.profile_name : d.user.username}
        user={d.user.username}
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
