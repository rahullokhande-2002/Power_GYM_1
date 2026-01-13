import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Member = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/members");
      setMember(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      await axios.delete(`http://localhost:3000/members/${id}`);
      setMember(member.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row">
        <div className="col-12">

          <div className="card shadow">
            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Gym Members</h4>

              {/* Header Buttons */}
              <div className="d-flex gap-2">
                <NavLink to="/dashboard" className="btn btn-danger btn-sm">
                  Dashboard
                </NavLink>

                <NavLink to="/addMembers" className="btn btn-danger btn-sm">
                  + Add Member
                </NavLink>
              </div>
            </div>

            <div className="card-body table-responsive">
              <table className="table table-bordered table-hover text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Height (cm)</th>
                    <th>Weight (kg)</th>
                    <th>Exercise Type</th>
                    <th>Gym Duration</th>
                    <th>Gym Fee (₹)</th>
                    <th>Mobile</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {member.map((val) => (
                    <tr key={val.id}>
                      <td>{val.fullname}</td>
                      <td>{val.age}</td>
                      <td>{val.height}</td>
                      <td>{val.weight}</td>
                      <td>{val.exerciseType}</td>
                      <td>{val.gymDuration}</td>
                      <td>₹ {val.gymFee}</td>
                      <td>{val.mobilenumber}</td>

                      <td>
                        <button
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => deleteData(val.id)}
                        >
                          Delete
                        </button>
                      </td>

                      <td>
                        <NavLink
                          to={`/editMember/${val.id}`}
                          className="btn btn-outline-primary btn-sm"
                        >
                          Edit
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Member;
