import React from "react";
import "./css/blog.css";

function Blog() {
  const blogs = [
    {
      title: "GEEKSFORGEEKS",
      description: "Perfect for computer science students.it has tutorials,coding problems,and interview preparation material.",
      img: "/images/GEEKS.png",
    },
    {
      title: "LEETCODE",
      description: "Famous for coding practice and competitive programming",
      img: "/images/LEETCODE.png",
    },
    {
      title: "W3SCHOOLS",
      description: " A Beginner-friendly site to learn HTML,CSS,JAVASCRIPT,PYTHON,and more.",
      img: "/images/W3.png",

    },
    
  ];

  return (
    <section className="blogs">
      <h2>Website To learn Coding</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div key={index} className="card">
            <img src={blog.img} alt={blog.title} className="card-img" />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;