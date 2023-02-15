import { Button } from '@atoms/Button';
import { Input } from '@atoms/Input';
import { FormEventHandler, useRef, useEffect } from 'react';

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

export const LoginRefForm = () => {
  const { email, language, password } = defaultData;
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLInputElement>(null);

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
    console.log('Case 3');
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input ref={emailRef} label="Email" id="email" type="email" defaultValue={email} />
        <Input ref={passwordRef} label="Password" id="password" type="password" defaultValue={password} />
        <Input ref={languageRef} label="Language" id="language" type="text" defaultValue={language} />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}