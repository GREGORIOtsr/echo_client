import React from "react";
import NewPost from './NewPost';
import PostList from "./PostList";

const Home = () => {
  return (
    <section id="home-container">
      <NewPost />
      <PostList />
    </section>
  );
};

export default Home;
