import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    Story => (
      <div className="app dark">
        <Story />
      </div>
    ),
  ],
};
