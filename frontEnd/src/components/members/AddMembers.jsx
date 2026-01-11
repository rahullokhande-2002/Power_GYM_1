import React, { useState } from 'react'
import axios from 'axios'

const AddMembers = () => {
  const [data, setData] = useState({
    fullname: '',
    age: '',
    height: '',
    weight: '',
    exerciseType: '',
    gymDuration: '',
    gymFee: '',
    mobilenumber: ''
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const saveform = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/members', data);
      setData({
        fullname: '',
        age: '',
        height: '',
        weight: '',
        exerciseType: '',
        gymDuration: '',
        gymFee: '',
        mobilenumber: ''
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center">
              <h4>Add Gym Member</h4>
            </div>

            <div className="card-body">
              <form onSubmit={saveform}>

                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    value={data.fullname}
                    onChange={dataHandler}
                    required
                  />
                </div>

                {/* Age */}
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={data.age}
                    onChange={dataHandler}
                  />
                </div>

                {/* Height */}
                <div className="mb-3">
                  <label className="form-label">Height (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="height"
                    value={data.height}
                    onChange={dataHandler}
                  />
                </div>

                {/* Weight */}
                <div className="mb-3">
                  <label className="form-label">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    value={data.weight}
                    onChange={dataHandler}
                  />
                </div>

                {/* Exercise Type */}
                <div className="mb-3">
                  <label className="form-label">Exercise Type</label>
                  <select
                    className="form-select"
                    name="exerciseType"
                    value={data.exerciseType}
                    onChange={dataHandler}
                  >
                    <option value="">Select Exercise</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Weight Training">Weight Training</option>
                    <option value="Yoga">Yoga</option>
                    <option value="CrossFit">CrossFit</option>
                  </select>
                </div>

                {/* Gym Duration */}
                <div className="mb-3">
                  <label className="form-label">Gym Duration</label>
                  <select
                    className="form-select"
                    name="gymDuration"
                    value={data.gymDuration}
                    onChange={dataHandler}
                  >
                    <option value="">Select Duration</option>
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year">1 Year</option>
                  </select>
                </div>

                {/* Gym Fee */}
                <div className="mb-3">
                  <label className="form-label">Gym Fee (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="gymFee"
                    value={data.gymFee}
                    onChange={dataHandler}
                  />
                </div>

                {/* Mobile Number */}
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobilenumber"
                    value={data.mobilenumber}
                    onChange={dataHandler}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-danger">
                    Add Member
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddMembers
