import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <div className="col-md-11">

          <div className="card shadow border-0">
            <div className="card-header bg-dark text-white text-center">
              <h4>Contact Us</h4>
              <p className="mb-0 text-secondary">
                We’re here to help you start your fitness journey
              </p>
            </div>

            <div className="card-body p-4">
              <div className="row g-4">

                {/* Contact Info */}
                <div className="col-md-4">
                  <h5 className="fw-bold mb-3">Get in Touch</h5>
                  <p className="text-muted">
                    PowerFit Gym provides professional training, modern equipment,
                    and a motivating environment.
                  </p>

                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">📍 <strong>Address:</strong> Deep Bungalow Chowk, Pune</li>
                    <li className="mb-2">📞 <strong>Phone:</strong> +91 98765 43210</li>
                    <li className="mb-2">✉️ <strong>Email:</strong> powerfitgym@gmail.com</li>
                  </ul>
                </div>

                {/* Contact Form */}
                <div className="col-md-4">
                  <h5 className="fw-bold mb-3">Send a Message</h5>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-danger w-100">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Google Map */}
                <div className="col-md-4">
                  <h5 className="fw-bold mb-3">Find Us</h5>
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.980048224549!2d73.83251457519191!3d18.529803732565487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf78c59e9b05%3A0x44d563577d1a01b1!2sDeep%20Bungalow%20Chowk!5e0!3m2!1sen!2sin!4v1768318236540!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gym Location"
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>



      
    </div>

    
  );
};

export default ContactUs;
