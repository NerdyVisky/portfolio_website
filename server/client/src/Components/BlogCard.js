import '../css/custom.css'
import '../css/blog.css'
import {useNavigate} from 'react-router-dom';

const BlogCard = ({blog}) => {
    const slug = blog.slug;
    const blogURL = "/blog/" + slug;
    const navigateTo = useNavigate();
    // console.log(blogURL);
    return ( 
        <div className="blog-card">
            <div className="blog-illus">
                <img width="100%" src={blog.illustrationLink} alt="" />
            </div>
            <div className="blog-details">
                <h1 onClick={() => {navigateTo(blogURL)}}>{blog.title}</h1>
                {blog.tags.map((tag, index) => {
                    return(<span key={index}>#{tag}</span>)
                })}
                <div onClick={() => {navigateTo(blogURL)}} className="read-more">Read More</div>
            </div>
        </div>
     );
}
 
export default BlogCard;