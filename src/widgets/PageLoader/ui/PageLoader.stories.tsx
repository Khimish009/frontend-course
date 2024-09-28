import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
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
