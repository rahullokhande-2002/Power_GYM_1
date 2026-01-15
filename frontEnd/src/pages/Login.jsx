import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Zoom, Slide } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dummy login check
    await axios.get("http://localhost:3000/profile");

    if (user.email === "admin@gmail.com" && user.password === "@123") {
      // alert("Login Successful");
     toast.success("login Successfully", {
  transition: Zoom,
   autoClose: 500
});

      navigate("/member");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('./p2.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Blur Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Login Card */}
      <div
        className="card p-4 shadow position-relative"
        style={{ width: "350px", zIndex: 1 }}
      >
        <h3 className="text-center mb-3 fw-bold">Admin Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
