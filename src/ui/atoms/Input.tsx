import { forwardRef, Ref } from 'react';

type Props = {
  id: string;
  type: 'email' | 'password' | 'text';
  value: string;
}

export const Input = forwardRef((
  props: Props,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div>
      <input
        ref={ref}
        id={props.id}
        type={props.type}
        defaultValue={props.value}
      />
    </div>
  )
});


// <LoginRefForm />
// <Input id={} ref={} type={} value={}
