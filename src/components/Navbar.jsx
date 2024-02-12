function Navbar(){
    return (
        <div>
            <nav className="navbar container">
                <div className="navbarLogo">
                    <img src="/images/logo2.png"/>
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
}
export default Navbar;