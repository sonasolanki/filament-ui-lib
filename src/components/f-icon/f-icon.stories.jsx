import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
//import { action } from '@storybook/addon-actions';

export default {
  title: 'f-icon',
  args: {},
  parameters: {
    docs: {
      page: Doc
    }
  }
};

const Template = (args) => <f-icon></f-icon>;

export const Default = Template.bind({});
Default.storyName = 'Default';

//window.addEventListener('eventName', (e) => action('eventName')(e.detail));
