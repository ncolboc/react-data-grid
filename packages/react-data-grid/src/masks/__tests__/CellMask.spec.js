import React from 'react';
import { shallow } from 'enzyme';

import { sel } from '../../__tests__/utils';
import CellMask from '../CellMask';

describe('CellMask', () => {
  const setup = (children) => {
    const props = {
      height: 30,
      width: 50,
      left: 5,
      top: 10,
      zIndex: 2
    };

    const wrapper = shallow(<CellMask {...props}>{children}</CellMask>);
    return wrapper.find(sel('cell-mask'));
  };

  it('should render a mask with correct style', () => {
    const mask = setup();

    expect(mask.prop('style')).toEqual(
      jasmine.objectContaining({
        height: 30,
        width: 50,
        zIndex: 2,
        transform: `translate(5px, 10px)`
      })
    );
  });

  it('should render any children', () => {
    const FakeChild = <div>test</div>;
    const mask = setup(FakeChild);

    expect(mask.contains(FakeChild)).toBe(true);
  });
});
