/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./App.css"
import axios from "axios";

// eslint-disable-next-line react/prop-types
const FetchPost = ({ postId, setPostId, post, setPost }) => {
  const fetchPost = async () => {
    if (!postId) {
      alert("Please enter a post ID");
      return;
    }
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(response.data);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error fetching post");
    }
  };

  return (
    <div className="main-container">
      <h2>Get Post by ID</h2>
      <input
        className="input-post"
        type="number"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        placeholder="Enter Post ID"
      />
      <button className="btn-get" onClick={fetchPost}>Get Post</button>
      {post && (
        <div>
          <h3>Post Details:</h3>
          <p><strong>ID:</strong> {post.id}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
        </div>
      )}
    </div>
  );
};

const CreatePost = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitPost = async () => {
    if (!formData.userId || !formData.id || !formData.title || !formData.body) {
      alert("All fields are required");
      return;
    }
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      alert("API added successfully: " + JSON.stringify(response.data));
      setFormData({ userId: "", id: "", title: "", body: "" }); // Reset form after success
    } catch (error) {
      alert("Error adding post");
    }
  };

  return (
    <div> <center> <h2>Create New Post</h2> </center>
    <div className="main-container2">
      <input
        type="number"
        name="userId"
        className="input-post"
        value={formData.userId}
        onChange={handleChange}
        placeholder="User ID"
      />
      <input
        type="number"
        className="input-post"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="Post ID"
      />
      <input
        type="text"
        name="title"
        className="input-post"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="body"
        className="input-post"
        value={formData.body}
        onChange={handleChange}
        placeholder="Body"
      ></textarea>
    </div>
    <button className="btn-post" onClick={submitPost}>Post API</button>
    </div>
  );
};

const App = () => {
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  return (
    <div style={{ padding: "20px" }}>
      <FetchPost postId={postId} setPostId={setPostId} post={post} setPost={setPost} />
      <CreatePost formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default App;
