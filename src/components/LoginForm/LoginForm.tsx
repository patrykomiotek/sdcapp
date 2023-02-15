import { useState } from 'react';
import type { ChangeEventHandler } from 'react';

interface FormData {
  email: string;
  password: string;
  language: string;
}

const defaultData: FormData = {
  email: '',
  password: '',
  language: '',
}

export const LoginForm = () => {
  const [data, setData] = useState<FormData>(defaultData);
  const { email, language, password } = data;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.id, event.target.value);
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <div>
      <div>
        <p>E-mail: {email}, password: {password}, language: {language}</p>
      </div>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" type="text" onChange={handleChange} />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}