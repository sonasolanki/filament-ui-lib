import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'f-button',
  args: {
  'disabled': false,
  'hasLoader': false,
  'iconConfig': undefined,
  'size': 'medium',
  'text': 'Button text',
  'type': 'button',
  'variant': 'progressive',
  },
  parameters: {
    docs: {
      page: Doc
    }
  }
};

const Template = (args) => <f-button {...args}></f-button>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('buttonClicked', (e) => action('buttonClicked')(e.detail));
