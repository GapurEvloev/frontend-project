import { render, screen } from '@testing-library/react';
import { Text } from 'shared/ui/Text/Text';

describe('Text', () => {
  test('should be rendered', () => {
    render(<Text text="TEST" />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
