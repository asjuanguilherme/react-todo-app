import React from 'react'
import Styled from 'styled-components'

import Container from '../layout/partials/Container'
import TodoList from './components/TodoList'

const Todo = props => {

   const Todo = Styled.div`
      width: 90%;
      max-width: 540px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
   `

   return(
      <Todo>
         <TodoList></TodoList>
      </Todo>
   )
}

export default Todo