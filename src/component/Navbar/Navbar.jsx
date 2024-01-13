import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <h3 className="nav-title">Navbar</h3>
            <nav>
                <Link className="hello" to="/">Home</Link>
                <NavLink className="hello" to="/user">User</NavLink>
                <NavLink className="hello" to="/about">About</NavLink>
                <Link className="hello" to="/contact">Contact</Link>
                <Link className="hello" to="/post">Post</Link>
                
            </nav>
        </div>
    );
};

export default Navbar;