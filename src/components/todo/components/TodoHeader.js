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
   height: 32px;
   width: 32px;
   background-image: url(${props => props.theme.themeIcon});
   background-size: cover;
   background-position: center;
   cursor: pointer;
`

const TodoHeader = props => {

   const { themeController } = props

   return (
      <HeaderContainer>
         <Title>TODO</Title>
         <ThemeToggle
            onClick={ () => themeController() }
         />
      </HeaderContainer>
   )
}

export default TodoHeader
