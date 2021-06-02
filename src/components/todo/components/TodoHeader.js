import React from 'react'
import Styled from 'styled-components'

const HeaderContainer = Styled.header`
   padding: 80px 0;
   padding-top: 90px;
   display: flex;
   align-itens: center;
   justify-content: space-between;

   @media screen and (max-width: 580px) {
      padding: 40px 0;
      padding-top: 60px;
   }
`

const Title = Styled.h1`
   font-size: 42px;
   margin-bottom: -10px;
   letter-spacing: 15px;
   font-weight: 800;
   text-transform: uppercase;
   color: white;

   @media screen and (max-width: 580px) {
      font-size: 32px;
      margin-bottom: -5px;
   }
`

const ThemeToggle = Styled.div`

`

const TodoHeader = () => {
   return (
      <HeaderContainer>
         <Title>TODO</Title>
         <ThemeToggle></ThemeToggle>
      </HeaderContainer>
   )
}

export default TodoHeader
