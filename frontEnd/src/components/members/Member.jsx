import React from "react";
import { NavLink } from "react-router-dom";

const Member = () => {
  return (
    <>
      <div className="container mt-5 pt-4">
        <div className="row">
          <div className="col-12">

            <div className="card shadow">
              <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Gym Members</h4>
                <button className="btn btn-danger btn-sm">
                  <NavLink to='/addMembers' >+AddMember</NavLink>
                </button>
              </div>

              <div className="card-body table-responsive">
                <table className="table table-bordered table-hover text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Age</th>
                      <th>Height (cm)</th>
                      <th>Weight (kg)</th>
                      <th>City</th>
                      <th>Mobile</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Rahul Lokhande</td>
                      <td>23</td>
                      <td>169</td>
                      <td>61</td>
                      <td>Pune</td>
                      <td>9876543210</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Amit Patil</td>
                      <td>25</td>
                      <td>172</td>
                      <td>70</td>
                      <td>Mumbai</td>
                      <td>9123456780</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Rohit Deshmukh</td>
                      <td>21</td>
                      <td>168</td>
                      <td>58</td>
                      <td>Nashik</td>
                      <td>9988776655</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
