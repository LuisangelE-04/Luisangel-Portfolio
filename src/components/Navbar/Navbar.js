import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">LE</a>
            </div>
            <div className="navbar-links">
                <a href="/create">About Me</a>
                <a href="/create">My Projects</a>
                <a href="/create">My Experience</a>
            </div>
        </nav>
    );
}
 
export default Navbar;