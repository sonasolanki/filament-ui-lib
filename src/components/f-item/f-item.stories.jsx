import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'f-item',
  args: {
    item: { 
      data: undefined,
      disabled: false,
      icon: undefined,
      justification: undefined,
      name: 'Item text',
      subText: 'Item sub text',
      selected: false,
    },
  },
  parameters: {
    docs: {
      page: Doc
    }
  }
};

const Template = (args) => <f-item {...args}></f-item>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('itemSelected', (e) => action('itemSelected')(e.detail));
