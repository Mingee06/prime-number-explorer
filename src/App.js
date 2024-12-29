import React, { useState } from 'react';
import PrimeNumberList from './components/PrimeNumberList';
import PrimeNumberVisualization from './components/PrimeNumberVisualization';
import PrimeFactorization from './components/PrimeFactorization';
import './App.css';

function App() {
  const [limit, setLimit] = useState(100); 
 

  return (
    <div className="App">
      <h1>Prime Number Explorer</h1>
      <PrimeNumberList limit={limit} setLimit={setLimit} />
      <PrimeNumberVisualization limit={limit} />
      <PrimeFactorization />
    </div>
  );
}

export default App;