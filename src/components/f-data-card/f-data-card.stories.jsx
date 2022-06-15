import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'f-data-card',
  parameters: {
    cssprops: {
      'f-data-card-display': {
        value: 'inline-block',
        description: 'display type of data card component',
      },
      'f-data-card-height': {
        value: '100%',
        description: 'height of data card component',
      },
      'f-data-card-padding': {
        value: 'var(--spacing-l)',
        description: 'padding (interior) of data card component',
      },
      'f-data-card-width': {
        value: '100%',
        description: 'width type of data card component',
      },
    },
    docs: {
      page: Doc
    }
  }
};

const Template = () => <f-data-card><h3>Data card header</h3><div>Data card content</div></f-data-card>;

export const DataCardDefault = Template.bind({});
DataCardDefault.storyName = 'Default';
