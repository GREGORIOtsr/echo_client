import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import NewPost from './NewPost';
import PostList from "./PostList";
import BackToTop from "./BackToTop";
import { UserContext } from "../../../context/UserContext";

const Home = () => {

  const { user } = useContext(UserContext);
 
  const [postList, setPostList] = useState('');
  const [newPost, setNewPost] = useState('');
  const [error, setError] = useState('');

  const uploadPost = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/posts`,
        JSON.stringify({ username: user.username, body: data }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setNewPost(res.data);
    } catch (error) {
      setError('Could not upload post.')
    }
  };

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/posts`);
      const data = res.data.sort((a, b) => {
        return b.createdAt.localeCompare(a.createdAt);
      });
      setPostList(data);
    };

    getPosts();
  }, [newPost]);

  return (
    <section id="home-container">
      <NewPost uploadPost={uploadPost} error={error} />
      {
        postList
        ? <PostList postList={postList} />
        : <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
      }
      <BackToTop />
    </section>
  );
};

export default Home;
