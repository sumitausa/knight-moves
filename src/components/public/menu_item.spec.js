import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './menu_item';

describe('Menu', () => {
  it('renders the price correctly', () => {
    const mockItem = {
      name: 'testItem',
      price: '40',
      description: 'a test item, used for testing'
    };

    const wrapper = shallow(<MenuItem item={mockItem} />);

    expect(wrapper.find({ enzymeId: 'menu.item.price' }).text()).toBe('$40');
  });

  it('renders the price correctly', () => {
    const mockItem = {
      name: 'testItem',
      price: '40',
      description: 'a test item, used for testing'
    };

    const wrapper = shallow(<MenuItem item={mockItem} />);

    expect(wrapper.find({ enzymeId: 'menu.item.nameAndPrice' }).text()).toBe(
      'testItem$40'
    );
  });

  it('renders the price correctly', () => {
    const mockItem = {
      name: 'testItem',
      price: '40',
      description: 'a test item, used for testing'
    };

    const wrapper = shallow(<MenuItem item={mockItem} />);

    expect(wrapper.find({ enzymeId: 'menu.item.description' }).text()).toBe(
      'a test item, used for testing'
    );
  });
});
