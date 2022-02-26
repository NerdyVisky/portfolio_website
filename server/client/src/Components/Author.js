import defaultImgURL from '../assets/img/default_dp.png'
const Author = ({author}) => {
    return ( 
        <div className="author-block">
            <div className="author-avatar">
                {author.imageURL ? <img width="45px" src={author.imageURL} alt="avatar" /> :  <img width="45px" src={defaultImgURL} alt="avatar" />}
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