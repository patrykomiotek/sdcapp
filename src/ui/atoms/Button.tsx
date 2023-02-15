import { ComponentPropsWithoutRef } from 'react';

// interface Props extends ComponentPropsWithoutRef<'button'> {
// }

export const Button = (
  { children, ...rest }: ComponentPropsWithoutRef<'button'>
) => {
  return (
    <div>
      <button
        {...rest}
      >
        {children}
      </button>
    </div>
  )
};


// <LoginRefForm />
// <Input id={} ref={} type={} value={}
