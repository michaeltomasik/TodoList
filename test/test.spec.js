import React from 'react';
const {
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  createRenderer
} = 'React/addons/TestUtils'
import 'jsdom-global/register'

import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

import App from '../src/App'
import TodoList from '../src/TodoList'



describe('A basic test', () => {
  it('should pass when everything is fine', function () {
    expect(true).to.be.true
  })
})

describe('App component', () => {

  let wrapper, event

  beforeEach(function(){
    wrapper = shallow(<App />)

    event = {
      target: {
        value: 'TEST'
      }
    }
  })

  it('check default state list', () => {
    expect(wrapper.state('list')).to.eql([])
  })

  it('check default state itemInput', () => {
    expect(wrapper.state('itemInput')).to.eql('')
  })

  it('handles typing letters into input', () => {
    wrapper.instance().handleInputChange(event)
    expect(wrapper.state('itemInput')).to.eql('TEST')
  })

  it('adds items to the list', () => {
    wrapper.instance().handleInputChange(event)
    wrapper.instance().addItem()
    expect(wrapper.state('list')).to.eql(['TEST'])
  })

  it('check deleting items from list', () => {
    wrapper.setState({ list: ['Tomek', 'Kasia', 'Ala'] })

    wrapper.instance().deleteItem(1)
    expect(wrapper.state('list')).to.eql(['Tomek', 'Ala'])
  })
})