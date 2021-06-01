import React from 'react'
import Styled from 'styled-components'

import TodoListItem from './TodoListItem'

const TodoList = () => {

   const TodoListContainer = Styled.div`
      width: 100%;
      background-color: hsl(0, 0%, 98%);
      border-radius: 7px;
   `

   const taskListData = [
      {
         name: 'Tarefa 1',
         done: false
      },
      {
         name: 'Tarefa 2',
         done: true
      }
   ]

   const taskListRendered = taskListData.map( task => <TodoListItem taskName={task.name} taskDone={task.done} />)

   return(
      <TodoListContainer>
         { taskListRendered }
      </TodoListContainer>
   )
}

export default TodoList