import React from 'react';

import ChevronButton from './ChevronButton';

const chevronButton = {
  title: 'Buttons/ChevronButton',
  component: ChevronButton,
}

const Template = (args) => <ChevronButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  border: true,
  background: 'Purple'
};


export default chevronButton