import React from 'react'
import Styled from 'styled-components'

const FooterContainer  = Styled.div`
   width: 100%;
   background-color: hsl(0, 0%, 98%);
   padding: 20px;
   display: flex;
   justify-content: space-between;
   border-radius: 0 0 7px 7px;
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

const TodoFooter = props => {

   const { data, taskController } = props

   return (
      <FooterContainer>
         <RemainingItems>{data.length} itens restantes</RemainingItems>
         <ClearCompleted onClick={ () => taskController('CLEAR_COMPLETED') }>
            Limpar Concluídos
         </ClearCompleted>
      </FooterContainer>
   )
}

export default TodoFooter
