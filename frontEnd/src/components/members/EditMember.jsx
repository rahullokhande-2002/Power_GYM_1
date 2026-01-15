import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { toast, Zoom, Slide } from "react-toastify";


const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [member, setMember] = useState({
    fullname: "",
    age: "",
    height: "",
    weight: "",
    exerciseType: "",
    gymDuration: "",
    gymFee: "",
    mobilenumber: ""
  });

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/members/${id}`);
        setMember(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMember();
  }, [id]);

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/members/${id}`, member);
      // alert("Member Updated Successfully");
     toast.warning("Updated Successfully", {
  transition: Zoom,
});
      navigate("/member");
    } catch (error) {
      console.log(error);
      alert("Update failed");
    }
  };

  return (
    <div className="container mt-5"style={{paddingTop: 50 }}>
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
                <label>Exercise Type</label>
                <select
                  className="form-select"
                  name="exerciseType"
                  value={member.exerciseType}
                  onChange={handleChange}
                >
                  <option value="">Select Exercise</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Weight Training">Weight Training</option>
                  <option value="Yoga">Yoga</option>
                  <option value="CrossFit">CrossFit</option>
                </select>
              </div>

              <div className="col-md-6">
                <label>Gym Duration</label>
                <select
                  className="form-select"
                  name="gymDuration"
                  value={member.gymDuration}
                  onChange={handleChange}
                >
                  <option value="">Select Duration</option>
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
              </div>

              <div className="col-md-6">
                <label>Gym Fee (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="gymFee"
                  value={member.gymFee}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label>Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="mobilenumber"
                  value={member.mobilenumber}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="mt-4 text-center">
              <button type="submit" className="btn btn-success me-2">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/members")}
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMember;
