import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { Text } from '@atoms/Text';

export const Generator = () => {
  const [id, setId] = useState(uuidv4());
  // const [id, setId] = useState<string>();
  // same as:
  // const state = useState();
  // const id = state[0];
  // const setId = state[1];

  // let id = uuidv4();

  const handleClick = () => {
    // id = uuidv4();
    setId(uuidv4());
    // console.log({ id });
  }

  return (
    <div>
      <Text>{id}</Text>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
