import React from 'react'
import Styled from 'styled-components'

import backgroundLight from '../../../images/bg-light.jpg'
// import backgroundDark from '../../../images/bg-dark.jpg'

const Background = props => {
   return(
      <BackgroundImage></BackgroundImage>
   )
}

const BackgroundImage = Styled.div`
   height: 35vh;
   width: 100%;
   background-image: url(${backgroundLight});
   background-size: cover;
   background-position: center;
   position: absolute;
   left: 0;
   top: 0;
   z-index: 0;
`

export default Background