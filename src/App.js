import React from 'react';
import Styled from 'styled-components';

import Main from './components/layout/Main';
import Todo from './components/todo/Todo';

const App = () => {
   return (
      <Main>
         <Todo></Todo>
      </Main>
   )
}

export default App