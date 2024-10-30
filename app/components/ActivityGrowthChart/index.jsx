"use client"

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './style.css';

// Register necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityGrowthChart = () => {
  const data = {
    labels: ['Jan 1', 'Jan 5', 'Jan 9', 'Jan 13', 'Jan 17'],
    datasets: [
      {
        label: 'Aerobics',
        data: [50, 60, 40, 70, 60],
        backgroundColor: '#FFAD47',
      },
      {
        label: 'Yoga',
        data: [40, 30, 50, 60, 40],
        backgroundColor: '#3AC183',
      },
      {
        label: 'Meditation',
        data: [20, 40, 30, 50, 30],
        backgroundColor: '#FF6464',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#333333',
        },
      },
      x: {
        ticks: {
          color: '#333333',
        },
      },
    },
  };

  return (
    <div className="activity-growth-chart">
      <h3 className="chart-title">Activity Growth</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityGrowthChart;
