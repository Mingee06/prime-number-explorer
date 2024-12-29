import React from 'react';
import { Bar } from 'react-chartjs-2';
import { generatePrimes } from '../utils/primeUtils';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PrimeNumberVisualization = ({ limit }) => {
  const primes = generatePrimes(limit);
  const data = {
    labels: primes,
    datasets: [
      {
        label: 'Prime Numbers',
        data: primes.map((_, index) => index + 1), // Simple bar chart height representation
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Prime Number Distribution</h3>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default PrimeNumberVisualization;
