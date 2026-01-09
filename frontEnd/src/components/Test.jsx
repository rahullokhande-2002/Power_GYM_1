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

const Test = () => {
  const [members, setMembers] = useState([]);
  const [membersByCity, setMembersByCity] = useState({});

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await axios.get("http://localhost:3000/members");
    setMembers(res.data);

    // ✅ CITY-WISE COUNT
    const cityCount = {};
    res.data.forEach((m) => {
      cityCount[m.city] = (cityCount[m.city] || 0) + 1;
    });
    setMembersByCity(cityCount);
  };

  // 🔴 BAR CHART – Members by City
  const barData = {
    labels: Object.keys(membersByCity),
    datasets: [
      {
        label: "Members",
        data: Object.values(membersByCity),
        backgroundColor: "#ff2e2e",
        borderRadius: 8,
      },
    ],
  };

  // 🟠 PIE CHART – City Distribution
  const pieData = {
    labels: Object.keys(membersByCity),
    datasets: [
      {
        data: Object.values(membersByCity),
        backgroundColor: [
          "#ff2e2e",
          "#0d6efd",
          "#ffc107",
          "#198754",
        ],
      },
    ],
  };

  // 🔵 LINE CHART – Weight Trend
  const lineData = {
    labels: members.map((m) => m.fullname),
    datasets: [
      {
        label: "Weight (kg)",
        data: members.map((m) => m.weight),
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13,110,253,0.2)",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Admin Dashboard</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow">
            <h5 className="text-danger">Members by City</h5>
            <Bar data={barData} />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow">
            <h5 className="text-warning">City Distribution</h5>
            <Pie data={pieData} />
          </div>
        </div>

        <div className="col-md-12">
          <div className="card p-3 shadow">
            <h5 className="text-primary">Member Weight Trend</h5>
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
