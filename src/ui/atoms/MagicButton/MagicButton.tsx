import { useEffect, useRef } from 'react';

export const MagicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'red';
      buttonRef.current.style.color = 'white';
    }
  }, []);

  return (
    <button ref={buttonRef} style={{ backgroundColor: 'blue' }}>
      Click me
    </button>
  );
}