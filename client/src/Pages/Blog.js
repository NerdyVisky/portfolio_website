import { useEffect, useState } from 'react';
import '../css/blog.css'
import nftImgURL from '../assets/img/nft.png';

const Blog = () => {
    const API_URL = 'http://localhost:8000/api/blogs';
    const [blogs, setBlogs] = useState([]);
    const [blogsLoaded, setBlogsLoaded] = useState(false);
    const blog = blogs[2];
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setBlogs(data))
        .then(() => setBlogsLoaded(true))
        .catch(err => console.log(err)); 
    }, [])
    let blogJSX = null;
    if(blogsLoaded){
        blogJSX = 
        <div>{blogs[0].title}</div>
    }
    return ( 
    <div id="blog">
       {blogJSX}
    </div> 
    );
}
 
export default Blog;