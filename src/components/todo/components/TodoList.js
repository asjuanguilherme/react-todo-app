import React from 'react'
import Styled from 'styled-components'

import TodoListItem from './TodoListItem'

const TodoListContainer = Styled.div`
   width: 100%;
   background-color: hsl(0, 0%, 98%);
   border-radius: 7px 7px 0px 0px;
`

const TodoList = props => {

   const { data, taskController } = props

   const renderedTaskList = data.map(task => <TodoListItem key={task.id} id={task.id} name={task.name} done={task.done} taskController={taskController} /> )
   
   return(
      <TodoListContainer>
         { renderedTaskList }
      </TodoListContainer>
   )
}

export default TodoList