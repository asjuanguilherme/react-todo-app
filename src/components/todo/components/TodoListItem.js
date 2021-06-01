import React from 'react'
import Styled from 'styled-components'

import checkboxIcon from '../../../images/icon-check.svg'
import closeIcon from '../../../images/icon-cross.svg'


const TodoListItem = props => {

   const [checked, setChecked] = React.useState(false)

   const TodoListItem = Styled.div`
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid hsl(233, 11%, 84%);
   `

   const Label = Styled.label`
      display: flex;
      align-items: center;
   `

   const Checkbox = Styled.input.attrs(props => ({
      type: 'checkbox',
      checked: checked ? 'checked' : '',
      onChange: () => setChecked(!checked)
   }))`
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

      &:checked {
         background: linear-gradient(45deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
      }

      &:after {
         opacity: 0;
         display: flex;
         content: "";
         height: 100%;
         width: 100%;
         transform: scale(0.75);
         background-image: url(${checkboxIcon});
         background-size: contain;
         background-position: center;
         background-repeat: no-repeat;
      }

      &:checked:after {
         opacity: 1;
         transform: scale(0.5);
      }

   `

   const TaskName = Styled.span`
      margin-left: 15px;
      cursor: pointer;
      ${ checked ? `
         text-decoration: line-through;
         color: hsl(233, 11%, 84%);
      ` : ''}
   `

   const CloseTask = Styled.span`
      display: flex;
      height: 14px;
      width: 14px;
      background-image: url(${closeIcon});
      background-size: cover;
      background-position: center;
      cursor: pointer;
   `

   return (
      <TodoListItem>
         <Label>
            <Checkbox />
            <TaskName>
               {props.taskName? props.taskName : 'Nova Tarefa'}
            </TaskName>
         </Label>
         <CloseTask />
      </TodoListItem>
   )
}

export default TodoListItem