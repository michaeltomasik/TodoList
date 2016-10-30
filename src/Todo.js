import React, { PropTypes } from 'react'

export const Todo = ({ listItem, index, deleteItem }) => (
  <div className='app-item'>
    <p> {listItem} </p>
    <p onClick={() => {deleteItem(index)}} className='app-delete'><b>X</b></p>
  </div>
)

Todo.propTypes = {
  listItem: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

export default Todo