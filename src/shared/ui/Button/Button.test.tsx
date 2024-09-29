import { render, screen } from '@testing-library/react';
import { ThemeButton } from 'shared/types';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
