import { useEffect, useState } from 'react';
import '../css/blog.css'
import nftImgURL from '../assets/img/nft.png';
import Author from '../Components/Author';
import '../css/custom.css'

const Blog = () => {
    const API_URL = 'http://localhost:8000/api/blogs';
    const [blogs, setBlogs] = useState([]);
    const [blogsLoaded, setBlogsLoaded] = useState(false);
    const blog = blogs[0];
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
        <div className="featured-section">
            <div className="featured-illus">
                <img height="100%"src={blog.illustrationLink} alt="" />
            </div>
            <div className="featured-details">
                <div className="featured-title"><h1 className="highlight">{blog.title}</h1></div>
                <div className="featured-authors">
                    {blog.authors.map((author, index) => {
                        if(index<2){
                        return(<Author key={author.name} author={author}/>)
                        }
                    })}
                </div>
                <div className="featured-content">
                    <p>{blog.main_content}</p>
                </div>
                <div className="featured-read-more">
                    <h2 className="highlight">Read More</h2>
                </div>
            </div>
        </div>
    }else{
        blogJSX = <div className='loader'>Hold up, amazing content on the way!</div>
    }
    return ( 
    <div id="blog">
       {blogJSX}
    </div> 
    );
}
 
export default Blog;