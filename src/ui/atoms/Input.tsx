import { ComponentPropsWithRef, forwardRef, Ref } from 'react';

interface Props extends ComponentPropsWithRef<'input'> {
  label: string;
}

// type Props = {
//   id: string;
//   type: 'email' | 'password' | 'text';
//   value: string;
// }

export const Input = forwardRef((
  { label, id, ...rest }: Props,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        {...rest}
      />
    </div>
  )
});


// <LoginRefForm />
// <Input id={} ref={} type={} value={}
