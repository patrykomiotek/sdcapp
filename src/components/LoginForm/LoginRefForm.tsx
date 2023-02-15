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