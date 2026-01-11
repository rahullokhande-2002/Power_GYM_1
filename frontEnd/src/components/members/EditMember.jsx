import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMember = () => {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();

  const [member, setMember] = useState({
    fullname: "",
    age: "",
    height: "",
    weight: "",
    city: "",
    mobilenumber: ""
  });

  // fetch single member
  useEffect(() => {
    axios
      .get(`http://localhost:3000/members/${id}`)
      .then((res) => setMember(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // handle input change
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  // update member
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/members/${id}`, member);
    alert("Member Updated Successfully");
    navigate("/members"); // go back to list page
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-dark text-white">
          <h4>Edit Gym Member</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              <div className="col-md-6">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={member.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={member.age}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label>Height (cm)</label>
                <input
                  type="number"
                  className="form-control"
                  name="height"
                  value={member.height}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  value={member.weight}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={member.city}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label>Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobilenumber"
                  value={member.mobilenumber}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="mt-4 text-center">
              <button className="btn btn-success me-2">Update</button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate(-1)}
              >
                Cancel button
  
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMember;
