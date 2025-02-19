import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const CropPreferenceChart = () => {
  const data = {
    labels: ['Wheat', 'Rice', 'Corn', 'Soybeans', 'Barley', 'Oats'],
    datasets: [
      {
        label: 'Crop Preferences',
        data: [30, 20, 25, 15, 5, 5], 
        backgroundColor: [
          'rgba(255, 205, 86, 0.6)', 
          'rgba(75, 192, 192, 0.6)', 
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)', 
          'rgba(255, 159, 64, 0.6)', 
          'rgba(54, 162, 235, 0.6)', 
        ],
        borderColor: [
          'rgba(255, 205, 86, 1)', 
          'rgba(75, 192, 192, 1)', 
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)', 
          'rgba(255, 159, 64, 1)', 
          'rgba(54, 162, 235, 1)', 
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      animation: {
        animateRotate: true,
        animateScale: true, 
        duration: 1000, 
      },
    },
    aspectRatio: 1,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4  my-4 mx-auto">
      <div className="flex items-center justify-center mb-4">
        <div className="w-64 h-64">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Crop Preferences</h3>
        <ul className="list-disc list-inside mx-auto inline-block text-left">
          {data.labels.map((label, index) => (
            <li key={index} className="text-gray-700 mb-2">
              <span
                className="inline-block w-3 h-3 mr-2"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></span>
              {label} - {data.datasets[0].data[index]}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CropPreferenceChart;
