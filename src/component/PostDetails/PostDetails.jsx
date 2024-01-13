import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const params = useLoaderData();
    const post = {
        width:400,
        margin:"auto"
    }
    const navigate = useNavigate();
    const handelGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <p style={post}>{params.body}</p>
            <button onClick={handelGoBack}>GoBack</button>
        </div>
    );
};

export default PostDetails;