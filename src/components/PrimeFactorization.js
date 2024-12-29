import React, { useState } from 'react';

const primeFactors = (n) => {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};

const PrimeFactorization = () => {
  const [number, setNumber] = useState('');
  const [factors, setFactors] = useState([]);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFactorize = () => {
    const factors = primeFactors(Number(number));
    setFactors(factors);
  };

  return (
    <div>
      <h3>Prime Factorization</h3>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        min="2"
      />
      <button onClick={handleFactorize}>Factorize</button>

      {factors.length > 0 && (
        <div>
          <h4>Prime Factors:</h4>
          <p>{factors.join(' × ')}</p>
        </div>
      )}
    </div>
  );
};

export default PrimeFactorization;
