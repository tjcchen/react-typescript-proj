import { useState, useEffect } from 'react';
import util from '../utils/util';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    util.log('Hello react + ts!', 1);
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;