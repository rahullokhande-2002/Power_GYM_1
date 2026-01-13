import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-danger" to="/">
          POWER GYM
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#gymNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="gymNav">
          
          {/* Menu */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/member"></Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/dashboard"></Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">Reports</Link>
            </li>
          </ul>

          {/* Login Button */}
          <Link to="/login" className="btn btn-danger btn-sm">
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
