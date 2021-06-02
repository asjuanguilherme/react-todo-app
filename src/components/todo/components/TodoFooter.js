import React from 'react'
import Styled from 'styled-components'

const FooterContainer  = Styled.div`
   width: 100%;
   background-color: hsl(0, 0%, 98%);
   padding: 20px;
   display: flex;
   justify-content: space-between;
   border-radius: 0 0 7px 7px;
   position: relative;
   border-top: 1px solid hsl(233, 11%, 84%);
   top: -1px;
`
const RemainingItems = Styled.div`
   font-size: 14px;
   color: hsl(236, 9%, 61%);
`
const ClearCompleted = Styled.div`
   font-size: 14px;
   color: hsl(236, 9%, 61%);
   cursor: pointer;
`

const TaskFilterContainer = Styled.div`
   display: flex;

   @media screen and (max-width: 580px) {
      justify-content: center;
      padding: 20px;
      width: 100%;
      position: absolute;
      left: 0;
      transform: translateY(100%);
      background-color: hsl(0, 0%, 98%);
      border-radius: 7px;
   }
`

const TaskFilter = Styled.div`
   font-size: 14px;
   color: hsl(236, 9%, 61%);
   font-weight: bold;
   margin: 0 8px;
   cursor: pointer;

   &.active {
      color: hsl(220, 98%, 61%);
   }
`

const TodoFooter = props => {

   const { data, taskController, filter } = props

   const countCompleted = () => {
      let count = 0

      data.forEach((task) => {
         if(!task.done) ++count
      })

      return count
   }

   return (
      <FooterContainer>
         <RemainingItems>{countCompleted()} itens restantes</RemainingItems>

         <TaskFilterContainer>
            <TaskFilter
               className={ !filter? 'active' : '' }
               onClick={ () => taskController('SET_FILTER',) }
            >Tudo</TaskFilter>
            <TaskFilter
               className={ filter === 'UNDONE' ? 'active' : '' }
               onClick={ () => taskController('SET_FILTER', 'UNDONE') }
            >Ativas</TaskFilter>
            <TaskFilter
               className={ filter === 'DONE' ? 'active' : '' }
               onClick={ () => taskController('SET_FILTER', 'DONE') }
            >Completas</TaskFilter>
         </TaskFilterContainer>

         <ClearCompleted onClick={ () => taskController('CLEAR_COMPLETED') }>
            Limpar Concluídos
         </ClearCompleted>
      </FooterContainer>
   )
}

export default TodoFooter
