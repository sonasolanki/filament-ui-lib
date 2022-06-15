import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
//import { action } from '@storybook/addon-actions';

export default {
  title: 'f-tabs',
  args: {
    items: [
      { name: 'Tab item 1', icon: {iconName: 'cog', iconType: 'fal'}, selected: true, subText: 'test' },
      { name: 'Tab item 2', icon: {iconName: 'calendar-alt', iconType: 'fal'}, selected: false },
      { name: 'Tab item 3', icon: {iconName: 'chart-bar', iconType: 'fal'}, selected: false },
      { name: 'Tab Item 4', icon: {iconName: 'phone', iconType: 'fal'}, selected: false }
    ],
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      page: Doc
    }
  }
};

const Template = (args) => <f-tabs {...args}></f-tabs>;

export const Default = Template.bind({});
Default.storyName = 'Default';

//window.addEventListener('eventName', (e) => action('eventName')(e.detail));
