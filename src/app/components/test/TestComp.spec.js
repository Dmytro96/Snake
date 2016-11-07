import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Immutable from 'immutable'
import { TestComp }  from './TestComp'

describe('Test Component', () => {
  const test = shallow(<TestComp/>);
  {/*const snake = shallow(<Snake/>);*/}

  it('should be div', () => {
    expect(test.type()).to.equal('div');
  });

  it('the className should be myTestDiv', () => {
    expect(test.hasClass('myTestDiv')).to.equal(true);
  });

  it('should output text \'Arr {time} smth\'', () => {
    const text = test.childAt(0);
    expect(text.text()).to.equal('Add ')
  });

  it('should show props', () => {
    // console.log(test.props());
  });

  it('state with manually input data', () => {
    const
      fn = (state, action) => {
        state = state.set('counter', state.get('counter') - action.payload);
        return state;
      },
      state = Immutable.Map({ counter: 10 }),
      action = { payload: 1 },
      expectedState = Immutable.Map({ counter: 9 }),
      newState = fn(state, action);

    expect(Immutable.is(expectedState, newState)).to.equal(true);
  });
});



