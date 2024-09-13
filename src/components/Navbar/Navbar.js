import './Navbar.css'
//import About from '../About/About'
//import Experience from '../Experience/Experience'
//import Projects from '../Projects/Projects'

const Navbar = () => {
    return (
        <nav>
            <h1 className="navbar-logo">LE</h1>
            <div className="navbar-links">
                <span className="navbar-background"></span>
                <a href="#About">
                    <span className="navbar-outline">About me</span>
                </a>
                <a href="#Experience">
                    <span className="navbar-outline">Experience</span>
                </a>
                <a href="#Projects">
                    <span className="navbar-outline">Projects</span>
                </a>
            </div>
            <h1 className="navbar-contact"><a href="#Projects">Contact</a></h1>
        </nav>
    );
}
 
export default Navbar;