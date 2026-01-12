import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [members, setMembers] = useState([]);
  const [cityCount, setCityCount] = useState({});
  const [ageGroup, setAgeGroup] = useState({});

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await axios.get("http://localhost:3000/members");
    setMembers(res.data);

    const cityObj = {};
    const ageObj = { "18-25": 0, "26-35": 0, "36+": 0 };

    res.data.forEach((m) => {
      // City count
      cityObj[m.city] = (cityObj[m.city] || 0) + 1;

      // Age groups
      if (m.age <= 25) ageObj["18-25"]++;
      else if (m.age <= 35) ageObj["26-35"]++;
      else ageObj["36+"]++;
    });

    setCityCount(cityObj);
    setAgeGroup(ageObj);
  };

  // 📊 Bar Chart – Members by City
  const barData = {
    labels: Object.keys(cityCount),
    datasets: [
      {
        label: "Members",
        data: Object.values(cityCount),
        backgroundColor: "#dc3545",
        borderRadius: 6,
      },
    ],
  };

  // 🥧 Pie Chart – Age Group
  const pieData = {
    labels: Object.keys(ageGroup),
    datasets: [
      {
        data: Object.values(ageGroup),
        backgroundColor: ["#0d6efd", "#ffc107", "#198754"],
      },
    ],
  };

  // 📈 Line Chart – Weight Trend
  const lineData = {
    labels: members.map((m) => m.fullname),
    datasets: [
      {
        label: "Weight (kg)",
        data: members.map((m) => m.weight),
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13,110,253,0.2)",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Admin Dashboard</h2>

      {/* ✅ ONLY TOTAL MEMBERS */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card shadow p-3 text-center">
            <h6>Total Members</h6>
            <h2 className="fw-bold text-danger">{members.length}</h2>
          </div>
        </div>
      </div>

      {/* ===== CHARTS ===== */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow">
            <h5 className="text-danger">Members by City</h5>
            <Bar data={barData} />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow">
            <h5 className="text-warning">Age Group Distribution</h5>
            <Pie data={pieData} />
          </div>
        </div>

        <div className="col-md-12">
          <div className="card p-3 shadow">
            <h5 className="text-primary">Weight Trend</h5>
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
