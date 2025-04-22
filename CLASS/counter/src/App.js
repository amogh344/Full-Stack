//app.js:i
import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function App() {
  const  [count, setCount] = useState(0);

  const  increment = () => setCount(prev => prev + 1);
  const  decrement = () => setCount(prev => prev - 1);
  const  reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React State Management</h1>
      <CounterDisplay count={count} />
      <button onClick={increment}>➕Increment  </button>
      <button onClick={decrement}>➖Decrement  </button>
      <button onClick={reset}>🔁Reset  </button>
    </div>
  );
}
export default App;