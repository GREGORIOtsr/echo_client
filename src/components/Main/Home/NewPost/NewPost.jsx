import React from "react";

const NewPost = ({ uploadPost }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.body.value;
    uploadPost(data);
  };

  return (
    <section id="newPost-container">
      <form onSubmit={handleSubmit}>
        <legend>Echo your thoughs</legend>
        <textarea name="body" id="newpost-textarea" cols="30" rows="10" placeholder="..."></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default NewPost;
