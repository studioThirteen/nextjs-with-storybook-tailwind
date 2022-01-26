import React from 'react';

import { opensea } from '../components/opensea';

export default {
  title: 'Components/opensea',
  component: opensea,
  args: {},
}

const Template = (args) => <opensea {...args} />;

export const Story = Template.bind({});
Story.args = {};
