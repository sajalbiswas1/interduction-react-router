import { useLoaderData } from "react-router-dom";
import Posts from "../Posts/Posts";
import './Post.css'

const Post = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            <h4>Total Post{post.length}</h4>
            <div className="title-container">
            {
                post.map(posts => <Posts key={posts.id} posts={posts}></Posts>)
            }
            </div>
        </div>
    );
};

export default Post;