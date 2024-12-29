
import React, { useState } from 'react';
import { generatePrimes } from '../utils/primeUtils';

const PrimeNumberList = ({ limit, setLimit }) => {
  const [primes, setPrimes] = useState([]);

  const handleChange = (e) => {
    setLimit(e.target.value);
  };

  const handleGeneratePrimes = () => {
    const generatedPrimes = generatePrimes(Number(limit));
    setPrimes(generatedPrimes);
  };

  return (
    <div>
      <h2>Prime Number Explorer</h2>
      <input
        type="number"
        value={limit}
        onChange={handleChange}
        min="2"
        max="10000"
      />
      <button onClick={handleGeneratePrimes}>Generate Primes</button>

      <h3>Prime Numbers up to {limit}:</h3>
      <div className="prime-list">
        {primes.map((prime, index) => (
          <div key={index} className="prime-chip">
            {prime}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimeNumberList;
