import React, { useState } from 'react'
import axios from 'axios'

const AddMembers = () => {
  const [data, setData] = useState({ fullname: '', age: '', height: '', weight: '', city: '', mobilenumber: '' });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    // console.log(e.target);
    // const {name,value} = e.target;
    // setData({...data,[name]:value})
  }

  const saveform = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3000/members', data);
      // console.log(result.data);
      setData(result.data);
      setData({fullname: '', age: '', height: '', weight: '', city: '', mobilenumber: '' })
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <>
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
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      name="fullname"
                      onChange={dataHandler}
                      value={data.fullname}
                      placeholder="Enter full name"
                    />
                  </div>

                  {/* Age */}
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      name="age"
                      onChange={dataHandler}
                      value={data.age}
                      placeholder="Enter age"
                    />
                  </div>

                  {/* Height */}
                  <div className="mb-3">
                    <label htmlFor="height" className="form-label">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="height"
                      name="height"
                      onChange={dataHandler}
                      value={data.height}
                      placeholder="Enter height"
                    />
                  </div>

                  {/* Weight */}
                  <div className="mb-3">
                    <label htmlFor="weight" className="form-label">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="weight"
                      name="weight"
                      onChange={dataHandler}
                      value={data.weight}
                      placeholder="Enter weight"
                    />
                  </div>

                  {/* City */}
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      onChange={dataHandler}
                      value={data.city}
                      placeholder="Enter city"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobilenumber"
                      name="mobilenumber"
                      onChange={dataHandler}
                      value={data.mobilenumber}
                      placeholder="Enter mobile number"
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
    </>
  )
}

export default AddMembers