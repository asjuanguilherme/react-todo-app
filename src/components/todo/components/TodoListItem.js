import React from 'react'
import Styled from 'styled-components'

import checkboxIcon from '../../../images/icon-check.svg'
import closeIcon from '../../../images/icon-cross.svg'

const ListItem = Styled.div`
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${ props => props.theme.lightColor };
   `
   const Label = Styled.label`
      display: flex;
      align-items: center;
   `
   const Checkbox = Styled.input.attrs(props => ({
      type: 'checkbox',
   }))`
      appearance: none;
      -webkit-appearance: none;
      height: 24px;
      width: 24px;
      border: 1px solid ${ props => props.theme.lightColor };
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
      color: ${ props => props.theme.darkColor };
      
      &.done {
         text-decoration: line-through;
         color: ${ props => props.theme.doneTaskColor };
      }
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

const TodoListItem = props => {

   const { id, name, done, taskController } = props

   return (
      <ListItem>
         <Label>
            <Checkbox
               checked={done}
               onChange={ () => taskController('STATUS_TOOGLE', id) }
            />
            <TaskName className={ done? 'done' : '' } >
               { name? name : 'Nova Tarefa'}
            </TaskName>
         </Label>
         <CloseTask onClick={ () => taskController('REMOVE_TASK', id) }/>
      </ListItem>
   )
}

export default TodoListItem