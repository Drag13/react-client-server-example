import App from './App';
import { render, screen, act, waitFor } from '@testing-library/react';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => {
      return [];
    },
  } as any)
);

test('App test should have a header', async () => {
  await act(async () => {
    render(<App />);
    return Promise.resolve();
  });

  const greeting = screen.getByText(/Russian looses during the war:/i); // assert
  expect(greeting).toBeInTheDocument(); // assert
});
