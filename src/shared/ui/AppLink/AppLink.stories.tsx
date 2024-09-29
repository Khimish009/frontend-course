import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { AppLinkTheme } from 'shared/types';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [
    Story => (
      <div className="app dark">
        <Story />
      </div>
    ),
  ],
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [
    Story => (
      <div className="app dark">
        <Story />
      </div>
    ),
  ],
};
