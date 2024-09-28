import React from 'react'; // TODO: Think laters
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  Story => (
    <BrowserRouter>
      <div className="app light">
        <Story />
      </div>
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
