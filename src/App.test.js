import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a 7x6 playing grid', async () => {
  const {findByTestId } = render(<App />);
  var table = await findByTestId('playing-grid');
  expect(table).toBeInTheDocument();
  const rows = table.childNodes[0].childNodes;
  expect(rows.length).toBe(6);
  expect(rows[0].childNodes.length).toBe(7)
});
