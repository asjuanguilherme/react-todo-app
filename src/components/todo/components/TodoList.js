import React from 'react'
import Styled from 'styled-components'

import TodoListItem from './TodoListItem'

const TodoListContainer = Styled.div`
   width: 100%;
   background-color: hsl(0, 0%, 98%);
   border-radius: 7px 7px 0px 0px;
   max-height: 50vh;
   overflow: auto;

   @media screen and (max-width: 580px) {
      max-height: 45vh;
   }
`

const TodoListEmpty = Styled.div`
   width: 100%;
   padding: 40px 20px;
   border-radius: 7px;
   text-align: center;
   color: hsl(236, 9%, 61%);
`

const TodoList = props => {

   const { data, taskController, filter } = props

   const renderedTaskList = (option) => {
      let list = data

      switch(option) {
         default:
            break
         case 'UNDONE':
            list = data.filter( a => a.done !== true )
            break
         case 'DONE':
            list = data.filter( a => a.done === true )
      }

      return list.map(task => <TodoListItem key={task.id} id={task.id} name={task.name} done={task.done} taskController={taskController} />)
   }
   
   return(
      <TodoListContainer>
         { renderedTaskList(filter).length > 0 && renderedTaskList(filter)}
         { renderedTaskList(filter).length === 0 && (
            <TodoListEmpty>
               Sem itens por aqui.
            </TodoListEmpty>
         )}
      </TodoListContainer>
   )
}

export default TodoList