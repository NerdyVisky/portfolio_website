import { useEffect, useState } from 'react';
import '../css/blog.css'
import nftImgURL from '../assets/img/nft.png';

const Blog = () => {
    const API_URL = 'http://localhost:8000/api/blogs';
    const [blogs, setBlogs] = useState([]);
    const blog = blogs[2];
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.log(err)); 
    }, [])
    return ( 
    <div id="blog">
    </div> 
    );
}
 
export default Blog;