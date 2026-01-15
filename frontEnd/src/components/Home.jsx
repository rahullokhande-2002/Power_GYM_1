import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src="./p2.avif"
              className="d-block w-100"
              alt="Gym"
              style={{ height: "90vh", objectFit: "cover" }}
            />

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

            <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-center">
              <h1 className="fw-bold display-4">GYM MANAGEMENT SYSTEM</h1>
              <p className="lead">
                Smart way to manage Members, Trainers & Payments
              </p>
              <div>
                <a
                  href="/addMembers"
                  className="btn btn-danger btn-lg me-2 animated-btn"
                >
                  Add Member
                </a>
                <a
                  href="/member"
                  className="btn btn-outline-light btn-lg animated-btn"
                >
                  View Members
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">System Features</h2>
          <p className="text-muted">
            Everything you need to run your gym professionally
          </p>
        </div>

        <div className="row g-4">
          {[
            ["👤", "Member Management", "Add, update and track members"],
            ["🏋️", "Trainer Control", "Assign trainers & workouts"],
            ["💳", "Payment Tracking", "Track fees & payment history"],
            ["📊", "Reports", "Revenue & attendance analytics"],
          ].map((item, i) => (
            <div className="col-md-3" key={i}>
              <div className="card feature-card h-100 border-0 text-center p-3">
                <div className="display-5 mb-3 icon">{item[0]}</div>
                <h5 className="fw-bold">{item[1]}</h5>
                <p className="text-muted small">{item[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Membership Plans</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card pricing-card h-100 border-0">
                <div className="card-body">
                  <h6 className="text-muted">Monthly</h6>
                  <h1 className="fw-bold text-danger">₹999</h1>
                  <ul className="list-unstyled my-3">
                    <li>✔ Gym Access</li>
                    <li>✔ Basic Trainer</li>
                    <li>✔ 6 Days / Week</li>
                  </ul>
                  <button className="btn btn-danger w-100 animated-btn">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card pricing-card h-100 border-danger">
                <div className="card-body">
                  <h6 className="text-muted">Quarterly</h6>
                  <h1 className="fw-bold text-danger">₹2499</h1>
                  <ul className="list-unstyled my-3">
                    <li>✔ All Equipment</li>
                    <li>✔ Personal Trainer</li>
                    <li>✔ Diet Guidance</li>
                  </ul>
                  <button className="btn btn-danger w-100 animated-btn">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      
    </>
  );
};

export default Home;
