import { MouseEventHandler, useEffect, useRef } from 'react';

export const MagicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'red';
      buttonRef.current.style.color = 'white';
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'green';
      buttonRef.current.style.color = 'white';
      // buttonRef.current.classList.add('')
      // buttonRef.current.classList.remove('')
    }
  }

  return (
    <button
      ref={buttonRef}
      style={{ backgroundColor: 'blue' }}
      onMouseEnter={handleMouseEnter}
    >
      Click me
    </button>
  );
}