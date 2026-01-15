import React from "react";

// 👉 If images are in /public folder
// public/t2.avif , public/t5.avif

const Trainer = () => {
  const trainers = [
    {
      name: "Rahul Sharma",
      specialty: "Strength & Weight Training",
      experience: "8+ Years Experience",
      image: "/t2.avif"
    },
    {
      name: "Anjali Deshmukh",
      specialty: "Yoga & Flexibility",
      experience: "6+ Years Experience",
      image: "/t5.avif"
    },
    {
      name: "Neha Kulkarni",
      specialty: "Cardio & Fat Loss",
      experience: "7+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1550345332-09e3ac987658"
    },
    {
      name: "Apurva Mohite",
      specialty: "CrossFit & HIIT",
      experience: "5+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110"
    }
  ];

  return (
    <div className="container mt-5 pt-4">

      {/* Inline CSS (all in one) */}
      <style>{`
        .trainer-card {
          transition: all 0.3s ease;
        }

        .trainer-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 25px rgba(0,0,0,0.2);
        }

        .trainer-img-wrapper {
          height: 260px;
          overflow: hidden;
        }

        .trainer-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .trainer-card:hover .trainer-img {
          transform: scale(1.1);
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Meet Our Trainers</h2>
        <p className="text-muted">
          Certified professionals dedicated to your fitness success
        </p>
      </div>

      <div className="row g-4">
        {trainers.map((trainer, index) => (
          <div className="col-md-3" key={index}>
            <div className="card shadow trainer-card h-100 border-0">

              {/* Image */}
              <div className="trainer-img-wrapper">
                <img
                  src={trainer.image}
                  className="trainer-img"
                  alt={trainer.name}
                />
              </div>

              {/* Content */}
              <div className="card-body text-center">
                <h5 className="fw-bold">{trainer.name}</h5>
                <p className="text-danger fw-semibold mb-1">
                  {trainer.specialty}
                </p>
                <p className="text-muted small">
                  {trainer.experience}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Trainer;
