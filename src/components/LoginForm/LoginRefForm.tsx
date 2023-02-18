import { Button } from '@atoms/Button';
import { Input } from '@atoms/Input';
import { FormEventHandler, useRef, useEffect, useState, FocusEventHandler } from 'react';

interface FormData {
  email: string;
  password: string;
  language: string;
}

const defaultData: FormData = {
  email: 'costam@wp.pl',
  password: '',
  language: '',
}

interface Props {
  defaultValues?: {
    email: string
  }
}

export const LoginRefForm = ({ defaultValues }: Props) => {
  const { email, language, password } = defaultData;
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLInputElement>(null);
  const [formErrors, setFormErrors] = useState({
    email: '',
  });

  useEffect(() => {
    // body
    if (emailRef.current) {
      emailRef.current.focus();
    }

    return () => {
      // unmounting
    }

  }, []); // mounting

  useEffect(() => {
    // body
  }); // mounting or updating

  useEffect(() => {
    // body
    // console.log('Case 3');
  }, [emailRef]); // updating when emailRef will change

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    // jQuery: $('#email)
    // VanillaJs: document.getElementById('email')
    if (emailRef.current) {
      emailRef.current.focus();
    }

    if (passwordRef.current) {
      passwordRef.current.style.border = '1px solid #c0392b';
    }

    console.log({
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      language: languageRef.current?.value || '',
    });
  }

  const handleEmailBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    console.log('event: ', event.target.value);
    if (!event.target.value.includes('@')) {
      setFormErrors({
        email: 'E-mail is invalid',
      });
    } else {
      setFormErrors({
        email: '',
      });
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input ref={emailRef} onBlur={handleEmailBlur} label="E-mail" id="email" type="email" defaultValue={email} />
        {formErrors.email && <p>E-mail is invalid</p>}
        <Input ref={passwordRef} label="Password" id="password" type="password" defaultValue={password} />
        <Input ref={languageRef} label="Language" id="language" type="text" defaultValue={language} />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}