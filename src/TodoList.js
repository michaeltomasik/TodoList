import React, { PropTypes } from 'react'
import Todo from './Todo'

export const TodoList = ({ list, itemInput, deleteItem, handleInputChange, addItem }) => {
  const todoList = list.map(function(listItem, index){
    return (
      <Todo key={listItem+index} listItem={listItem} index={index} deleteItem={deleteItem} />
    )
  })

  return (
    <div className='app'>
      <h1>TODO LIST</h1>
      <div className='app-input-container'>
        <input className='app-input' type='text' value={itemInput} onChange={handleInputChange} />
        <button className='app-add' onClick={addItem}>Add</button>
      </div>
      {todoList}
    </div>
  );
}

TodoList.propTypes = {
  list: PropTypes.array,
  itemInput: PropTypes.string,
  deleteItem: PropTypes.func,
  handleInputChange: PropTypes.func,
  addItem: PropTypes.func
}

export default TodoList