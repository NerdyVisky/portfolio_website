import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Author from '../Components/Author';
import BlogCard from '../Components/BlogCard';
import '../css/custom.css';
import '../css/blog.css';
import loaderGIF from '../assets/img/loader.gif';

const Blog = () => {
  const API_URL = 'https://portfolio-website-7r8u.onrender.com/api/blogs';
  const [blogs, setBlogs] = useState([]);
  const [blogsLoaded, setBlogsLoaded] = useState(false);
  const blog = blogs.filter((blog, i) => {
    return blog.isFeatured;
  })[0];
  const navigateTo = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    document.title = 'Blog | Vishvesh Trivedi';
    if (sessionStorage.getItem('vishveshtrivedi_blogs')) {
      setBlogs(JSON.parse(sessionStorage.getItem('vishveshtrivedi_blogs')));
      setBlogsLoaded(true);
    } else {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          sessionStorage.setItem('vishveshtrivedi_blogs', JSON.stringify(data));
        })
        .then(() => setBlogsLoaded(true))
        .catch((err) => console.log(err));
    }
  }, []);
  let blogJSX = null;
  if (blogsLoaded) {
    const slug = blog.slug;
    const blogURL = '/blog/' + slug;
    blogJSX = (
      <>
        <div className="featured-section">
          <div className="featured-illus">
            <img src={blog.illustrationLink} alt="" />
          </div>
          <div className="featured-details">
            <div className="featured-title">
              <h1 className="highlight">{blog.title}</h1>
            </div>
            <div className="featured-authors">
              {blog.authors.map((author, index) => {
                if (index < 2) {
                  return <Author key={author.name} author={author} />;
                }
              })}
            </div>
            <div className="featured-content">
              <p>{blog.main_content}</p>
            </div>
            <div className="featured-read-more">
              <h2
                onClick={() => {
                  navigateTo(blogURL);
                }}
                className="highlight">
                Read More
              </h2>
            </div>
          </div>
        </div>
        <div className="all-blogs-explore">
          <h1>Explore Blogs</h1>
        </div>
        <div className="carousel">
          <div className="inner-carousel">
            {blogs.reverse().map((blog, index) => {
              return <BlogCard key={blog._id} blog={blog} />;
            })}
          </div>
        </div>
      </>
    );
  } else {
    blogJSX = (
      <div className="loader">
        <img width="100px" src={loaderGIF} alt="" />
        <h1>Getting your feed ready...</h1>
      </div>
    );
  }
  return <div id="blog">{blogJSX}</div>;
};

export default Blog;
