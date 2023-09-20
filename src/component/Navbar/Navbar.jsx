import { Link } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <nav>
                <Link className="hello" to="/">Home</Link>
                <Link className="hello" to="/user">User</Link>
                <Link className="hello" to="/about">About</Link>
                <Link className="hello" to="/contact">Contact</Link>
                
            </nav>
        </div>
    );
};

export default Navbar;