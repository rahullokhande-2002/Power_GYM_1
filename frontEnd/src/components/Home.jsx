import React from "react";

const Home = () => {
  return (
    <>
      {/* CAROUSEL */}
      <div
        id="gymCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#gymCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#gymCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#gymCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              className="d-block w-100"
              alt="Gym"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center h-100">
              <h1 className="fw-bold">GYM MANAGEMENT SYSTEM</h1>
              <p className="lead">
                Manage Members, Payments & Trainers Easily
              </p>
              <div>
                <button className="btn btn-danger me-2">Get Started</button>
                <button className="btn btn-outline-light">
                  View Dashboard
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
              className="d-block w-100"
              alt="Workout"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h1 className="fw-bold">POWER YOUR FITNESS BUSINESS</h1>
              <p>Track members & revenue in real time</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07d"
              className="d-block w-100"
              alt="Training"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h1 className="fw-bold">SMART GYM SOLUTIONS</h1>
              <p>Reports, Payments & performance analytics</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#gymCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#gymCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* FEATURES */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-4">SYSTEM FEATURES</h2>

        <div className="row g-4">
          {[
            ["Member Management", "Add, update & track gym members."],
            ["Trainer Control", "Manage trainers & workout plans."],
            ["Payment Tracking", "Fees, invoices & payment history."],
            ["Reports", "Revenue & attendance analytics."],
          ].map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>{item[0]}</h5>
                  <p>{item[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">MEMBERSHIP PLANS</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h3 className="text-danger">₹999</h3>
                  <p>Monthly</p>
                  <ul className="list-unstyled">
                    <li>✔ Gym Access</li>
                    <li>✔ Basic Trainer</li>
                    <li>✔ 6 Days / Week</li>
                  </ul>
                  <button className="btn btn-danger">Choose Plan</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-danger shadow">
                <div className="card-body">
                  <h3 className="text-danger">₹2499</h3>
                  <p>Quarterly</p>
                  <ul className="list-unstyled">
                    <li>✔ All Equipment</li>
                    <li>✔ Personal Trainer</li>
                    <li>✔ Diet Guidance</li>
                  </ul>
                  <button className="btn btn-danger">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* FOOTER */}
   <footer className="bg-black text-white pt-4">
  <div className="container">
    <div className="row text-start">

      {/* Gym Info */}
      <div className="col-md-4 mb-3">
        <h5 className="text-danger fw-bold">Power Gym</h5>
        <p className="small">
          Professional gym management system to manage members,
          trainers, payments & reports efficiently.
        </p>
      </div>

      {/* Contact Info */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-bold">Contact Us</h6>
        <p className="mb-1">📍 Kolhapur, Maharashtra</p>
        <p className="mb-1">📞 +91 90994 56361</p>
        <p className="mb-1">📧 powergym@gmail.com</p>
      </div>

      {/* Quick Links */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-bold">Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="/" className="text-white text-decoration-none">Home</a></li>
          <li><a href="/member" className="text-white text-decoration-none">Members</a></li>
          <li><a href="/addMembers" className="text-white text-decoration-none">Add Member</a></li>
          <li><a href="/test" className="text-white text-decoration-none">Dashboard</a></li>
        </ul>
      </div>

    </div>

    <hr className="border-secondary" />

    <div className="text-center pb-3">
      <p className="mb-0 small">
        © {new Date().getFullYear()} Power Gym Management System | All Rights Reserved
      </p>
    </div>
  </div>
</footer>

    </>
  );
};

export default Home;
