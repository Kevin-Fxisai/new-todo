import React, { useState } from 'react'
import { Divider, Typography, Space, Flex, Button } from 'antd';
import Input from '../Components/InputTag';
import FormControler from '../Components/FormController';
import * as Yup from 'yup'

import { addTodo } from '../action/action';

import TodoList from '../Components/TodoList';


//Formik
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

//Ant Design
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
     
      <Flex vertical={true} align='center' gap='large' >
      <Typography>
        <Title>ToDo List</Title>
      </Typography>

        <Formik initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
          {
            formik => (
              <Form style={{width: '50%'}}>
                <Flex gap="middle" vertical>
                <FormControler  control='input' name='todoText' type='text' id='topic' label='Enter your topic' />
                <Button type='primary' htmlType='submit'>Submit</Button>
                </Flex>
              </Form>
            )
          }

        </Formik >
        <TodoList />
      </Flex>
    </>
  )
}

export default Main