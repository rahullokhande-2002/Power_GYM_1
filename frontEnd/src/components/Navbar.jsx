import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          <a className="navbar-brand fw-bold text-danger" href="#">
            POWER GYM
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#gymNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="gymNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/member">Members</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Trainers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Plans</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
            </ul>
            <button className="btn btn-danger btn-sm">Login</button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
