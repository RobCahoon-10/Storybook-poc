import React from 'react';

import ToggleSwitch from './ToggleSwitch';

const toggleSwitch = {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  args: {
    checked: false,
    disabled: false,
    onChange: undefined,
  }
}

export default toggleSwitch

const Template = (args) => <ToggleSwitch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: false,
};

