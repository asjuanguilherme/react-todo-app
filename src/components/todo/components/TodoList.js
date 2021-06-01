import React from 'react'
import Styled from 'styled-components'

import TodoListItem from './TodoListItem'

const TodoList = () => {

   const TodoListContainer = Styled.div`
      width: 100%;
      background-color: hsl(0, 0%, 98%);
      border-radius: 7px;
   `

   return(
      <TodoListContainer>
         <TodoListItem />
      </TodoListContainer>
   )
}

export default TodoList