import { ComponentMeta } from '@storybook/react';

import { Counter } from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;


export const _Counter = () => <Counter />
