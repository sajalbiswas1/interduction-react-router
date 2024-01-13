import { Link, useNavigate } from 'react-router-dom';
import './Posts.css'
const Posts = ({posts}) => {
    const {id,title} = posts;
    const navigate = useNavigate();
    const handelPost=()=> {
        navigate(`/post/${id}`)
    }

    return (
        <div className="posts-title">
            
            <h3 className='title'>Tile:{title}</h3>
            <Link to={`/post/${id}`}>Post View</Link>
            <Link to={`/post/${id}`}><button>Post View</button></Link>
            <button onClick={handelPost}>View Post</button>
        </div>
    );
};

export default Posts;