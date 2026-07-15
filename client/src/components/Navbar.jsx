import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <h2>Snap<span>X</span></h2> 
          <p>Photography Template</p>
        </div>
        <nav className="nav-links">
          <a href="#" className="blue-link">Home</a> {/* BLUE */}
          <a href="#" className="blue-link">Photos & Videos</a> {/* BLUE */}
          <a href="#" className="blue-link">Categories</a> {/* BLUE */}
          <a href="#" className="blue-link">Users</a> {/* BLUE */}
        </nav>
        <div className="nav-right">
          <img 
            src="https://i.pravatar.cc/35?img=32"
            alt="user" 
            className="user-img" 
          />
          <a href="#" className="sign-btn">👤 Sign In</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;