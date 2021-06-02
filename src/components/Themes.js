import backgroundLight from '../images/bg-light.jpg'
import backgroundDark from '../images/bg-dark.jpg'

import sunIcon from '../images/icon-sun.svg'
import moonIcon from '../images/icon-moon.svg'

export const darkTheme = {
   themeIcon: moonIcon,
   backgroundImage: backgroundDark,
   backgroundColor: 'hsl(235, 21%, 11%)',
   cardBodyColor: 'hsl(235, 24%, 19%)',
   lightColor: 'hsl(235, 19%, 35%)',
   color: 'hsl(234, 39%, 85%)',
   doneTaskColor: 'hsl(234, 11%, 52%)',
   darkColor: 'hsl(234, 39%, 85%)',
   option: 'hsl(234, 39%, 85%)',
   optionHover: 'hsl(236, 33%, 92%)',
   optionSelected: 'hsl(220, 98%, 61%)',
}

export const lightTheme = {
   themeIcon: sunIcon,
   backgroundImage: backgroundLight,
   backgroundColor: 'hsl(0, 0%, 98%)',
   cardBodyColor: 'hsl(0, 0%, 98%)',
   lightColor: 'hsl(233, 11%, 84%)',
   color: 'hsl(236, 9%, 61%)',
   doneTaskColor: 'hsl(233, 11%, 84%)',
   darkColor: 'hsl(235, 19%, 35%)',
   option: 'hsl(236, 9%, 61%)',
   optionHover: 'hsl(236, 9%, 61%)',
   optionSelected: 'hsl(220, 98%, 61%)',
}