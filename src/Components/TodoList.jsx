import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Typography, Button, Flex } from 'antd';
import { deleteTodo, editTodo } from '../action/action';

const TodoList = () => {
  const todoList = useSelector(state => state.todos);
  const [editStates, setEditStates] = useState({});  // Track edit state for each item
  const [editData, setEditData] = useState({}); // Store data for editing
  console.log(editData, 'This is eidt state');

  const dispatch = useDispatch();
  console.log(todoList, 'to sdo list');

  function handleEdit(id) {
    setEditStates((prevState) => ({
      ...prevState,
      [id]: true,  // Set edit mode true for the specific item
    }));

    // Set the current text for editing
    const todoToEdit = todoList.todos.find(todo => todo.id === id);
    setEditData({
      ...editData,
      [id]: todoToEdit.text,
    });
  }

  function handleSave(id) {
    setEditStates((prevState) => ({
      ...prevState,
      [id]: false,
    }));

    const updatedText = editData[id];

    console.log(id, updatedText, 'editing');

    dispatch(editTodo(id, updatedText))

    setEditData((prevState) => ({
      ...prevState,
      [id]: updatedText,
    }));
  }

  function handleChange(id, e) {
    setEditData((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }));
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <>
      {todoList.todos.length > 0 ? (
        <List
          style={{ width: "50%" }}
          bordered
          dataSource={todoList.todos}
          renderItem={(item) => (
            <List.Item key={item.id}>
              {editStates[item.id] ? (
                <input
                  type="text"
                  id={item.id}
                  value={editData[item.id] || item.text}
                  onChange={(e) => handleChange(item.id, e)}
                />
              ) : (
                <Typography.Text mark>{item.text}</Typography.Text>
              )}

              <Flex gap='small' className="action-btn">
                {editStates[item.id] ? (
                  <Button style={{ background: 'green', border:'none', color: 'white' }} variant="solid" onClick={() => handleSave(item.id)}> Save
                  </Button>
                ) : (
                  <Button style={{ background: 'orange', border:'none', color: "white" }} variant='solid' onClick={() => handleEdit(item.id)}>Edit</Button>
                )}
                <Button color="danger" variant="solid" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </Flex>
            </List.Item>
          )}
        />
      ) : null}
    </>
  );
};

export default TodoList;
