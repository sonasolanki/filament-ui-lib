import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'f-lozenge',
  args: {
    content: 'Lozenge content',
    iconConfig: undefined
  },
  parameters: {
    cssprops: {
      '--f-lozenge-background-color': {
        value: 'var(--neutral-black)',
        description: 'background color of lozenge component'
      },
      '--f-lozenge-border-color': {
        value: 'var(--neutral-black)',
        description: 'border color of lozenge component'
      },
      '--f-lozenge-border-radius': {
        value: '50%',
        description: 'border radius of lozenge component'
      },
      '--f-lozenge-display': {
        value: 'inline-block',
        description: 'display of lozenge component'
      },
      '--f-lozenge-font-size': {
        value: 'var(--base-font-size)',
        description: 'font size of lozenge component'
      },
      '--f-lozenge-height': {
        value: '28px',
        description: 'height of lozenge component'
      },
      '--f-lozenge-min-width': {
        value: '28px',
        description: 'minimum width of lozenge component'
      },
      '--f-lozenge-text-color': {
        value: 'var(--neutral-white)',
        description: 'text color of lozenge component'
      },
    },
    docs: {
      page: Doc
    }
  }
};

const Template = (args) => <f-lozenge {...args}></f-lozenge>;

export const Default = Template.bind({});
Default.storyName = 'Default';

export const WithIcon = Template.bind({});
WithIcon.storyName = 'WithIcon';
WithIcon.args = {
  iconConfig: {  
    iconName: 'bullhorn',
    iconType: 'fal',
  }
}
