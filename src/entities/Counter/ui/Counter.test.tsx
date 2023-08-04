import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should be rendered', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('10');
  });

  test('should be incremented', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('counter-increment-btn'));
    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('11');
  });

  test('should be decremented', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('counter-decrement-btn'));
    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('9');
  });
});
