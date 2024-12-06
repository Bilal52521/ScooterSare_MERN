import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Blogposts.css";

const Blogpost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null); // State to store fetched post

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8570/api/blogs/${id}`);

        if (!response.ok) {
          throw new Error("Post not found");
        }

        const data = await response.json();

        // If post is found, set it in the state
        if (data.success && data.post) {
          setPost(data.post);
        } else {
          console.error("Post not found in the response");
        }
      } catch (error) {
        console.error("Error fetching post:", error.message);
      }
    };

    fetchPost();
  }, [id]); // The effect runs when the ID changes

  if (!post) {
    return <p>Loading post...</p>; // Show loading message until post is fetched
  }

  return (
    <div className="blogpost-container">
      <h1>{post.author}</h1>
      <h1>{post.title}</h1>
      <img src={post.img[0]} alt={post.title} />
      <p>{post.content}</p>
      <p className="category">{post.description}</p>
    </div>
  );
};

export default Blogpost;
