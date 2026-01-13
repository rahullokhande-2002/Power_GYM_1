import React from "react";

const About = () => {
  return (
    <div className="container mt-5 pt-4">

      {/* Hero Section */}
      <div
        className="card shadow mb-5 border-0"
        style={{
          background: "linear-gradient(135deg, #111, #222)",
        }}
      >
        <div className="card-body text-white text-center p-5">
          <h1 className="fw-bold text-uppercase">PowerFit Gym</h1>
          <p className="lead mt-3 text-secondary">
            Transforming lives through fitness, discipline, and dedication
          </p>
        </div>
      </div>

      <div className="row g-4">

        {/* Who We Are */}
        <div className="col-md-6">
          <div className="card shadow h-100 hover-card">
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-dark">Who We Are</h4>
              <p className="text-muted">
                PowerFit Gym is a modern fitness center focused on helping individuals
                achieve their fitness goals through expert guidance, advanced equipment,
                and a motivating atmosphere.
              </p>
              <p className="text-muted">
                Our gym management system ensures smooth membership handling and
                a seamless experience for all members.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="col-md-6">
          <div className="card shadow h-100 hover-card">
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-dark">Our Mission</h4>
              <p className="text-muted">
                To empower individuals to build strength, confidence, and discipline
                through structured training programs and professional coaching.
              </p>
              <p className="text-muted">
                Fitness is not a short-term goal — it is a lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <h4 className="fw-bold text-center mb-4">Why Choose PowerFit</h4>

              <div className="row text-center g-4">
                {[
                  { icon: "🏋️", text: "Certified Trainers" },
                  { icon: "💪", text: "Modern Equipment" },
                  { icon: "📅", text: "Flexible Memberships" },
                  { icon: "🔥", text: "Motivating Environment" },
                ].map((item, index) => (
                  <div className="col-md-3" key={index}>
                    <div className="p-4 border rounded feature-box">
                      <h3>{item.icon}</h3>
                      <p className="fw-semibold mt-2">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Training Types */}
        <div className="col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <h4 className="fw-bold text-center mb-4">Training Types</h4>

              <div className="row g-4 text-center">
                {[
                  { icon: "🏃", title: "Cardio Training", desc: "Improve endurance and burn calories" },
                  { icon: "🏋️‍♂️", title: "Weight Training", desc: "Build muscle and strength" },
                  { icon: "🧘", title: "Yoga & Flexibility", desc: "Improve balance and flexibility" },
                  { icon: "🔥", title: "CrossFit", desc: "High-intensity functional workouts" },
                ].map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="border rounded p-4 h-100 training-box">
                      <h3>{item.icon}</h3>
                      <p className="fw-semibold mt-2">{item.title}</p>
                      <small className="text-muted">{item.desc}</small>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Inline Styles */}
      <style>{`
        .hover-card {
          transition: all 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-box {
          background: #fff;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .feature-box:hover {
          background: #111;
          color: #fff;
          transform: scale(1.05);
        }

        .training-box {
          background: #f8f9fa;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .training-box:hover {
          background: #111;
          color: #fff;
          transform: translateY(-5px);
        }
      `}</style>

    </div>
  );
};

export default About;
