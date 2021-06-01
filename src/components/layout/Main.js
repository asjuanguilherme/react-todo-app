import React from 'react'
import Styled from 'styled-components'

import Background from './partials/Background'

const Main = (props) => {
   return (
      <MainContainer>
         <Background/>
            {props.children}
      </MainContainer>
   )
}

const MainContainer = Styled.main`
   height: 100vh;
   width: 100vw;
   background-color: hsl(236, 33%, 92%);
   position: relative;
`
export default Main