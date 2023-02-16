import { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // logic
      setCount((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    }

  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}