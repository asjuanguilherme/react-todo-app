import React from 'react'
import Styled from 'styled-components'


const AddNew = Styled.div`
   background-color: ${props => props.theme.cardBodyColor};
   border-radius: 7px;
   width: 100%;
   padding: 20px;
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`
const Input = Styled.input`
   background-color: ${props => props.theme.cardBodyColor};
   color: ${props => props.theme.color};
   font-weight: bold;
   font-family: inherit;
   margin-left: 15px;
   width: 100%;

   &::placeholder {
      color: inherit;
   }
`
const Button = Styled.button`
   appearance: none;
   -webkit-appearance: none;
   height: 24px;
   width: 24px;
   border: 1px solid ${props => props.theme.lightColor};
   cursor: pointer;
   border-radius: 50%;
   outline: none;
   overflow: hidden;
   transition: .2s;
   flex-shrink: 0;
   background-color: ${props => props.theme.cardBodyColor};

   &:hover {
      
   }
`

const TodoAddNew = (props) => {
   const { taskController } = props

   const [nameInput, setNameInput] = React.useState('')

   const inputRef = React.useRef()

   const addNewTask = () => {
      if(nameInput) {
         setNameInput('')
         taskController("ADD_TASK", nameInput)
      }
   }


   return (
      <AddNew>
         <Button
            onClick={ addNewTask }
         />
         <Input 
            onKeyDown={ e => e.key === "Enter" ? addNewTask() : false}
            ref={inputRef}
            type="text"
            value={nameInput}
            onChange={ e => setNameInput(e.target.value)}
            placeholder="Criar nova tarefa"
         />
      </AddNew>
   )
}

export default TodoAddNew
