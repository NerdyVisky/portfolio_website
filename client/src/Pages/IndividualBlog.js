import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import '../css/indBlog.css'
import '../css/custom.css'
import NotFound from './NotFound';
import Author from '../Components/Author'
const IndividualBlog = () => {
    const [blog, setBlog] = useState([]);
    const [blogLoaded, setBlogLoaded] = useState(false);
    let {slug} = useParams();
    let API_URL = 'http://localhost:8000/api/blogs/' + slug;
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(blog => setBlog(blog))
        .then(() => setBlogLoaded(true))
        .catch(err => console.log(err));
    }, [])
    let pageJSX = null;
    if(blogLoaded){
        if(blog.length != 0){
            pageJSX = 
            <div className="blog-page">
            <div className="main-blog-title">
                <h1>{blog[0].title}</h1>
            </div>
            <div className="blog-authors">
                    {blog[0].authors.map((author, index) => {
                        return(<Author key={author.name} author={author}/>)
                    })}
            </div>
            <div className="ind-blog-illus">
                <img width="100%" src={blog[0].illustrationLink} alt="" />
                <h3 className="disclaimer">NOTE : This illustration is owned by Renesa SVNIT.</h3>
            </div>
            <div className="blog-main-content">
                {blog[0].main_content}
            </div>
            <div className="tags">
                {blog[0].tags.map((tag, index) => {
                    return(<span className="tag">#{tag}</span>)
                })}
            </div>
            </div>;
        }else{
            pageJSX = <NotFound/>;
        }
    }
    return ( 
        <div id="indBlog">
            {pageJSX}
        </div>
     );
}
 
export default IndividualBlog;