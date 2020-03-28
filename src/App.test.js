import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow, mount} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders a 7x6 playing grid', async () => {
  const wrapper = mount(<App />);
  const rows = wrapper.find('Row');
  expect(rows.length).toBe(6);
  const cells = rows.first().find('Cell')
  expect(cells.length).toBe(7)
});

test('render x:5 y:0 at top left', async () => {
  const wrapper = mount(<App />);
  const topRow = wrapper.find('Row').first();
  const topLeftCell = topRow.find('Cell').first();
  expect(topLeftCell.props().cell.x).toBe(0)
  expect(topLeftCell.props().cell.y).toBe(5)
});

test('render x:0 y:6 at bottom right', async () => {
  const wrapper = mount(<App />);
  const bottomRow = wrapper.find('Row').last();
  const bottomRightCell = bottomRow.find('Cell').last();
  expect(bottomRightCell.props().cell.x).toBe(6)
  expect(bottomRightCell.props().cell.y).toBe(0)
});