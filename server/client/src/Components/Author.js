const Author = ({author}) => {
    return ( 
        <div className="author-block">
            <div className="author-avatar">
                <img width="45px" src={author.imageURL} alt="avatar" />
            </div>
            <div className="author-details">
                <div className="designation">
                    {author.role === 'writer' ? 'Written by' : 'Illustrated by'}
                </div>
                <div className="author-name">{author.name}</div>
            </div>
        </div>
     );
}
 
export default Author;