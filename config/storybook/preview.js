import React from 'react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  Story => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
};

export default preview;
