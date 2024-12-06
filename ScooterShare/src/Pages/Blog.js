import React, { useState, useEffect } from "react";
import "./../Pages/Blog.css";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]); // State to store fetched posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8570/api/blogs");

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`Error fetching blog posts: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data); // Log the response data for debugging

        // Access the 'blogs' array from the response
        if (Array.isArray(data.blogs)) {
          setPosts(data.blogs); // Update state with the blogs array
        } else {
          console.error("Blogs data is not an array:", data.blogs);
        }
      } catch (error) {
        console.error(error.message); // Log the error
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-content">
        <header>
          <h1>Blog</h1>
          <p>BLOG - ARCHIVE TITLE</p>
        </header>
        <div className="blog-grid">
          <div className="posts">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div className="blog-post" key={post._id}>
                  <img src={post.img[0]} alt={post.title} />{" "}
                  {/* Display first image */}
                  <div className="post-info">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <Link to={`/blogpost/${post._id}`} className="read-more">
                      Read more
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading posts...</p> // Display loading message if posts are not loaded yet
            )}
          </div>
          <aside className="sidebar">
            <div className="sidebar-card">
              <div className="about-us">
                <h3>About us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula eget dolor Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Obcaecati tempore officiis
                  numquam
                </p>
                <Link to="/#">More about us</Link> <br />
                <div className="social">
                  <FaFacebook />
                  <CiInstagram />
                  <FaLinkedin />
                </div>
              </div>
              <div className="newsletter">
                <h3>Sign up for the newsletter</h3>
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <button type="submit">Sign up</button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
