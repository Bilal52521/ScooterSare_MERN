import React, { useState, useEffect } from "react";
import "../Styles/Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    img: [""],
    content: "",
    description: "",
    author: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:8570/api/blogs");
      const data = await response.json();

      if (data.success && Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      } else {
        console.error("No blogs found or invalid response:", data);
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...blog.img];
    updatedImages[index] = value;
    setBlog({ ...blog, img: updatedImages });
  };

  const handleAddImageField = () => {
    setBlog({ ...blog, img: [...blog.img, ""] });
  };

  const handleRemoveImageField = (index) => {
    const updatedImages = blog.img.filter((_, i) => i !== index);
    setBlog({ ...blog, img: updatedImages });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      try {
        await fetch(`http://localhost:8570/api/updateblog/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        });
        fetchBlogs();
        setIsEditing(false);
        setEditId(null);
      } catch (error) {
        console.error("Error updating blog:", error);
      }
    } else {
      try {
        await fetch("http://localhost:8570/api/newblog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        });
        fetchBlogs();
      } catch (error) {
        console.error("Error adding new blog:", error);
      }
    }
    setShowForm(false);
    setBlog({ title: "", img: [""], content: "", description: "", author: "" });
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find((b) => b._id === id);
    setBlog(blogToEdit);
    setIsEditing(true);
    setEditId(id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8570/api/deleteblog/${id}`, {
        method: "DELETE",
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="blogs">
      <div className="table-container">
        <button
          className="create-btn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Close Form" : "Create Blog"}
        </button>

        {showForm && (
          <div className="blog-form">
            <div className="form-row">
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                type="text"
                name="title"
                value={blog.title}
                onChange={handleChange}
                placeholder="Title"
              />
            </div>
            <div className="form-row">
              <label>Images:</label>
              {blog.img.map((image, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    placeholder="Image URL"
                  />
                  <button onClick={() => handleRemoveImageField(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button onClick={handleAddImageField}>Add Image</button>
            </div>
            <div className="form-row">
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                name="content"
                value={blog.content}
                onChange={handleChange}
                placeholder="Content"
              ></textarea>
            </div>
            <div className="form-row">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={blog.description}
                onChange={handleChange}
                placeholder="Description"
              ></textarea>
            </div>

            <button onClick={handleSubmit}>
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  {blog.img.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Blog ${index + 1}`}
                      style={{ width: "100px" }}
                    />
                  ))}
                </td>
                <td>{blog.content}</td>
                {/* <td>{blog.description}</td> */}
                <td>{blog.author}</td>
                <td>
                  <button onClick={() => handleEdit(blog._id)}>Edit</button>
                  <button onClick={() => handleDelete(blog._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
