import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
//import { action } from '@storybook/addon-actions';

export default {
  title: 'f-text-input',
  args: {
    disabled: false,
    errorMessage: undefined,
    helperText: 'Text input helper text',
    initialValue: undefined,
    labelText: 'Text input label text',
    required: false,
    type: 'text',
  },
  argTypes: {
    initialValue: {
      control: {type: 'text'}
    },
    errorMessage: {
      control: {type: 'text'}
    }
  },
  parameters: {
    docs: {
      page: Doc
    }
  }
};

const Template = (args) => <f-text-input {...args}></f-text-input>;

export const Default = Template.bind({});
Default.storyName = 'Default';

//window.addEventListener('eventName', (e) => action('eventName')(e.detail));
