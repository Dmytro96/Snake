import React, {PropTypes as pt} from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Score from '../score/Score'
import configureStore from '../../store/configureStore'


describe('Score render', () => {

  const
    store = configureStore(),
    context = { store };

  {/*const score = mount(<Provider store={store}><Score/></Provider>);*/}
  const score = mount(<Score />, {context, childContextTypes: { store: pt.object}});

  it('initial Score should equal to 0', () => {
    expect(score.text()).to.contain('0');
  });
});
