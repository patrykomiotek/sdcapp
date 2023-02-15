import { FormEventHandler, useRef } from 'react';

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

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      language: languageRef.current?.value || '',
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input ref={emailRef} id="email" type="email" defaultValue={email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} id="password" type="password" defaultValue={password} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input ref={languageRef} id="language" type="text" defaultValue={language} />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}