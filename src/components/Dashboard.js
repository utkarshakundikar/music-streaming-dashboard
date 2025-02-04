import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Sample data for the User Growth chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Total Users',
        data: [100, 200, 300, 400, 500],
        fill: false,
        borderColor: 'blue',
      },
      {
        label: 'Active Users',
        data: [50, 100, 150, 200, 250],
        fill: false,
        borderColor: 'green',
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Streamify Dashboard</h1>
      <div className="metrics">
        <div className="metric">Total Users: 500</div>
        <div className="metric">Active Users: 250</div>
        <div className="metric">Total Streams: 5000</div>
        <div className="metric">Revenue: $5000</div>
        <div className="metric">Top Artist: Artist X</div>
      </div>
      <div className="charts">
        <Line data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
