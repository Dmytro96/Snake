import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Score from '../score/Score'
import configureStore from '../../store/configureStore'

import * as PropTypes from 'react/lib/ReactDOMFactories';

describe('Score render', () => {

  const store = configureStore();
  const context = { store };

  {/*const score = mount(<Provider store={store}><Score/></Provider>);*/}
  const score = mount(<Score />, {context, childContextTypes: { store: PropTypes.object}});

  it('initial count should equal to 0', () => {
    expect(score.find('.score').find('p').text()).to.equal('0');
  });
});
