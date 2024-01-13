import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";
import './User.css'


const User = () => {
    const users = useLoaderData()
    return (
        <div>
            <p>My User: {users.length}</p>
            <p>hello every one</p>
            <div className="main-user-div">
            {
                users.map(user =><Users key={user.id} user={user}></Users>)
            }
            </div>
        </div>
    );
};

export default User;