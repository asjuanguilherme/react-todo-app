import React from 'react'
import Styled from 'styled-components'

export default props => {
   return(
      <Container>
         {props.children}
      </Container>
   )
}

const Container = Styled.div`
   width: 100%;
   max-width: 580px;
   margin: 0 auto;
   position: relative;
   z-index: 10;
`