import './Navbar.css'
//import About from '../About/About'
//import Experience from '../Experience/Experience'
//import Projects from '../Projects/Projects'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">LE</a>
            </div>
            <div className="navbar-links">
                <a href="#About">About Me</a>
                <a href="#Experience">Experience</a>
                <a href="#Projects">Projects</a>
            </div>
        </nav>
    );
}
 
export default Navbar;