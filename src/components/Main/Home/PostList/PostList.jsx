import React, { useEffect, useState } from "react";

const PostList = () => {

  const [postList, setPostList] = useState('');

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/posts`);
      const data = res.data;
    }
  }, []);

  const getPosts = async () => {

  }

  return (
    <section>
      
    </section>
  );
};

export default PostList;
