import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Member = () => {
const [member,setMember] = useState([])

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() => {
try {
     const result =await axios.get('http://localhost:3000/members');
   console.log(result.data);
   setMember(result.data)
} catch (error) {
  
}
  }
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
                    {
                      member.map((val)=>(
                           <tr>
                      <td>{val.id}</td>
                      <td>{val.fullname}</td>
                      <td>{val.age}</td>
                      <td>{val.height}</td>
                      <td>{val.weight}</td>
                      <td>{val.city}</td>
                      <td>{val.mobilenumber}</td>
                    </tr>
                      ))
                    }
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
