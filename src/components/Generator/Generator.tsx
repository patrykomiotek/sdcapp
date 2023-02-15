import { v4 as uuidv4 } from 'uuid';

import { Text } from '@components/Text';

export const Generator = () => {
  return (
    <div>
      <Text>{uuidv4()}</Text>
      <button>Click me</button>
    </div>
  );
}
