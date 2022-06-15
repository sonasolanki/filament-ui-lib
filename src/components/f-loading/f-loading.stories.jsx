import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'f-loading',
  args: {
    variant: 'spinner',
    size: 'small',
    inverted: false
  },
  parameters: {
    docs: {
      page: Doc
    }
  }
};

const Template = (args) => <f-loading {...args}></f-loading>;

export const Default = Template.bind({});
Default.storyName = 'Default';
