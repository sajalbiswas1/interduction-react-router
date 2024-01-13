import { Link } from 'react-router-dom';
import './Users.css'
const Users = ({user}) => {
    const {id,email,name,phone} = user;
    console.log(id)
    return (
        <div className="user-container">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default Users;