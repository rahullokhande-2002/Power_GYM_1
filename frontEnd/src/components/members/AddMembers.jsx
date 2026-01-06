import React from 'react'

const AddMembers = () => {
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
                <form>

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
                      value=""
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
                      value=""
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
                      value=""
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
                      value=""
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
                      value=""
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
                      id="number"
                      name="number"
                      value=""
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div className="d-grid">
                    <button type="button" className="btn btn-danger">
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