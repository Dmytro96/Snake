import React from 'react'
import { mount } from 'enzyme'
import { expect, assert } from 'chai'
import * as PropTypes from 'react/lib/ReactDOMFactories';

import Snake  from './Snake'
import configureStore from '../../store/configureStore'
import { initialState } from '../../reducers/snake'


describe('Snake', () => {

  const
    store = configureStore(),
    context = { store },
    snake = mount(<Snake />, {context, childContextTypes: { store: PropTypes.object}});

  it('should render correctly', () => {
    const
      amountOfRectElements = snake.find('rect'),
      expectedSnakeSize = initialState.get('points').size;
    expect(amountOfRectElements).to.have.lengthOf(expectedSnakeSize);
  });

});

