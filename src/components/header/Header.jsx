import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <span>My Website</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;