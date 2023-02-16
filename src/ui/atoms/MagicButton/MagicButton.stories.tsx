import { ComponentMeta } from '@storybook/react';

import { MagicButton } from './MagicButton';

export default {
  title: 'UI/Atoms/MagicButton',
  component: MagicButton,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  },
} as ComponentMeta<typeof MagicButton>;


export const _MagicButton = () => {
  return (
    <MagicButton />
  );
}
