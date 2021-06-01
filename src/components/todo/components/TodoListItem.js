import React from 'react'
import Styled from 'styled-components'

const TodoListItem = () => {

   const TodoListItem = Styled.div`
      width: 100%;
      padding: 20px;
   `

   const Label = Styled.label`
   `

   const Checkbox = Styled.input.attrs(props => ({
      type: 'checkbox',
   }))`

   `

   return (
      <TodoListItem>
         <Label>
            
         </Label>
      </TodoListItem>
   )
}

export default TodoListItem