import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import { TestComp }  from './TestComp'

describe('Test Component', () => {
  const test = shallow(<TestComp/>);

  it('should be div', () => {
    expect(test.type()).to.equal('div');
  });

  it('the className should be myTestDiv', () => {
    expect(test.hasClass('myTestDiv')).to.equal(true);
  });

});
