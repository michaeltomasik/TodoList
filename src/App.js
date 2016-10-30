import React, { Component } from 'react'
import TodoList from './TodoList'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      itemInput: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem() {
    const { list, itemInput } = this.state

    if(itemInput !== '') {
      this.setState({ list: [ ...list, itemInput ] })
    }
  }

  handleInputChange(event) {
    const { value } = event.target
    this.setState({ itemInput: value });
  }

  deleteItem(index) {
    const { list } = this.state
    list.splice(index, 1)

    this.setState({ list })
  }

  render() {
    let { list, itemInput } = this.state

    return (
      <div className='app'>
        <TodoList 
          list={list} 
          itemInput={itemInput} 
          deleteItem={this.deleteItem} 
          handleInputChange={this.handleInputChange} 
          addItem={this.addItem} />
      </div>
    );
  }
}