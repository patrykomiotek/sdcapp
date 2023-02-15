import { forwardRef, Ref, ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<'button'> {
  children: string;
}

const Button = forwardRef((
  { children, ...rest }: Props,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

export { Button };
