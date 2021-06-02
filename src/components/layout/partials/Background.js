import React from 'react'
import Styled from 'styled-components'

const BackgroundImage = Styled.div`
   height: 35vh;
   width: 100%;
   background-image: url(${ props => props.theme.backgroundImage });
   background-size: cover;
   background-position: center;
   position: absolute;
   left: 0;
   top: 0;
   z-index: 0;
`

const Background = props => {
   return(
      <BackgroundImage></BackgroundImage>
   )
}


export default Background