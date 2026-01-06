import React from 'react'

const Home = () => {
  return (
<>


      {/* HERO */}
      <section className="bg-dark text-white text-center pt-5 mt-5">
        <div className="container py-5">
          <h1 className="fw-bold">GYM MANAGEMENT SYSTEM</h1>
          <p className="lead">
            Manage Members, Payments & Trainers Easily
          </p>
          <button className="btn btn-danger me-2">Get Started</button>
          <button className="btn btn-outline-light">View Dashboard</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-4">SYSTEM FEATURES</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100">
              <div className="card-body">
                <h5>Member Management</h5>
                <p>Add, update & track gym members.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100">
              <div className="card-body">
                <h5>Trainer Control</h5>
                <p>Manage trainers & workout plans.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100">
              <div className="card-body">
                <h5>Payment Tracking</h5>
                <p>Fees, invoices & payment history.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100">
              <div className="card-body">
                <h5>Reports</h5>
                <p>Revenue & attendance analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">MEMBERSHIP PLANS</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100">
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
              <div className="card h-100 border-danger">
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

      {/* CTA */}
      <section className="bg-dark text-white text-center py-5">
        <h2>Start Managing Your Gym Professionally</h2>
        <button className="btn btn-danger mt-3">
          Go To Dashboard
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} Power Gym Management System
        </p>
      </footer>
    </>
  );

}
export default Home