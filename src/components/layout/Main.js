import React from 'react'
import Styled from 'styled-components'

import Background from './partials/Background'

export default (props) => {
   return (
      <Main>
         <Background/>
            {props.children}
      </Main>
   )
}

const Main = Styled.main`
   height: 100vh;
   width: 100vw;
   background-color: hsl(236, 33%, 92%);
   position: relative;
`