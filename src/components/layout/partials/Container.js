import React from 'react'
import Styled from 'styled-components'

const Container = props => {
   const Container = Styled.div`
      width: 100%;
      max-width: 580px;
      margin: 0 auto;
      position: relative;
      z-index: 10;
   `

   return(
      <Container>
         {props.children}
      </Container>
   )
   
}

export default Container