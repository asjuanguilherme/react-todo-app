import React from 'react';
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/Themes'

import Main from './components/layout/Main';
import Todo from './components/todo/Todo';

const App = () => {

   if(!JSON.parse(localStorage.getItem("TODO_THEME"))) {
      localStorage.setItem("TODO_THEME", JSON.stringify(lightTheme))
   }

   const defaultTheme = JSON.parse(localStorage.getItem("TODO_THEME"))

   const [theme, setTheme] = React.useState(defaultTheme)

   const changeTheme = () => {
      setTheme( theme === darkTheme ? lightTheme : darkTheme )
   }

   React.useEffect( () => {
      localStorage.setItem("TODO_THEME", JSON.stringify(theme))
   })

   return (
      <ThemeProvider theme={theme} >
         <Main>
            <Todo themeController={changeTheme}></Todo>
         </Main>
      </ThemeProvider>
   )
}

export default App