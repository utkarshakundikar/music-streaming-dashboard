import React from 'react';
import { Pie } from 'react-chartjs-2';

const RevenueChart = () => {
  const data = {
    labels: ['Subscriptions', 'Ads'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['blue', 'green'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default RevenueChart;
