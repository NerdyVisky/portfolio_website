import '../css/custom.css'

const BlogCard = ({blog}) => {
    return ( 
        <div className="blog-card">
            <div className="blog-illus">
                <img width="100%" src={blog.illustrationLink} alt="" />
            </div>
            <div className="blog-details">
                <h1>{blog.title}</h1>
                {blog.tags.map((tag, index) => {
                    return(<span key={index}>#{tag}</span>)
                })}
                <div className="read-more">Read More</div>
            </div>
        </div>
     );
}
 
export default BlogCard;