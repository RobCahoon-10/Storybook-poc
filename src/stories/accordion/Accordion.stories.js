import React from 'react';

import Accordion from './Accordion';

const accordion = {
  title: 'Accordion',
  component: Accordion,
  
}


const Template = (args) => <Accordion {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
    data: [{
        id: 1,
        elements: {
            headerText: 'Header Text',
            infoText: 'This is a test',
            subText: 'testing',
            richText: '<p> Bob the builder </p>'
        }
    }]
};

export const WithImage = Template.bind({});
WithImage.args = {
    data: [{
        id: 1,
        elements: {
            image: {
                asset: { altText: "Test" },
                url: 'https://content-eu-1.content-cms.com/c17fe0f2-fb01-420c-bc89-9886290ac1c9/dxresources/a20b/a20b5dc8-d3c2-4305-b39b-f488532593d7.png',
            },
            headerText: 'Header Text',
            infoText: 'This is a test',
            subText: 'testing',
            richText: '<p> Bob the builder </p>'
        }
    }]
};

export default accordion




