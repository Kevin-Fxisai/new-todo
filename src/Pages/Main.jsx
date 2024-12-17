import React, { useState } from 'react'
import { Divider, Typography } from 'antd';
import Input from '../Components/InputTag';
import FormControler from '../Components/FormController';
import * as Yup from 'yup'

import { addTodo } from '../action/action';

import TodoList from '../Components/TodoList';


//Formik
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

//Ant Design
import { Button, Flex, Space } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;


const initialValues = {
  todoText: ""
}

const validationSchema = Yup.object({
  todoText: Yup.string().required('Required Field')
})

const Main = () => {

  const todoList = useSelector(state => state)

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    dispatch(addTodo(values.todoText))
  }

  console.log(todoList);


  return (
    <>
      <Typography >
        <Title>ToDo List</Title>
      </Typography>

      <Space direction="vertical" size="large" style={{
        display: 'flex',
      }}>
        
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {
            formik => (
              <Form>
                <FormControler control='input' name='todoText' type='text' id='topic' label='Enter your topic' />
                <button type='submit' disabled={!formik.isValid}>Submit</button>
              </Form>
            )
          }

        </Formik>

        <TodoList />
      </Space>
    </>
  )
}

export default Main