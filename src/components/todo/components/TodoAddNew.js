import React from 'react'
import Styled from 'styled-components'

const TodoAddNew = (props) => {
   const { taskController } = props

   const [nameInput, setNameInput] = React.useState('')

   const inputRef = React.useRef()

   React.useEffect(()=>{
      inputRef.current.focus()
   })

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
            ref={inputRef}
            type="text"
            value={nameInput}
            onChange={ e => setNameInput(e.target.value)}
            placeholder="Criar nova tarefa"
         />
      </AddNew>
   )
}

const AddNew = Styled.div`
   background-color: hsl(0, 0%, 98%);
   border-radius: 7px;
   width: 100%;
   padding: 20px;
   display: flex;
   align-items: center;
   border-bottom: 1px solid hsl(233, 11%, 84%);
   margin-bottom: 20px;
`
const Input = Styled.input`
   background-color: hsl(0, 0%, 98%);
   color: hsl(236, 9%, 61%);
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
   border: 1px solid hsl(233, 11%, 84%);
   cursor: pointer;
   border-radius: 50%;
   outline: none;
   overflow: hidden;
   transition: .2s;
   flex-shrink: 0;
`

export default TodoAddNew
