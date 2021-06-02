import React from 'react'
import Styled from 'styled-components'

import TodoListItem from './TodoListItem'

const TodoListContainer = Styled.div`
   width: 100%;
   background-color: ${props => props.theme.cardBodyColor};
   border-radius: 7px 7px 0px 0px;
   max-height: 50vh;
   overflow: auto;
   box-shadow: 0px 90px 120px rgba(0,0,0,.3);

   @media screen and (max-width: 580px) {
      max-height: 45vh;
   }
`

const TodoListEmpty = Styled.div`
   width: 100%;
   padding: 40px 20px;
   border-radius: 7px;
   text-align: center;
   color: ${props => props.theme.color};
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