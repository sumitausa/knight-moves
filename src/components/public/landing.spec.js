import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
import Button from 'react-bootstrap/Button';

describe('Landing', () => {
  it('renders two button components', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.find(Button).length).toBe(2);
    wrapper.unmount();
  });
});
