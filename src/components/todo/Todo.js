import React from 'react'
import Styled from 'styled-components'

import TodoAddNew from './components/TodoAddNew'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'

const Todo = props => {
   if( ! JSON.parse(localStorage.getItem("TODO_LIST")) ) {
      localStorage.setItem("TODO_LIST", JSON.stringify([{
            id: 0,
            name: 'Ler um pouco',
            done: false,
         },
         {
            id: 1,
            name: 'Assistir à televisão',
            done: false,
         },
         {
            id: 2,
            name: 'Estudar Biologia',
            done: false,
         }
      ]))
   }

   let [data, setData] = React.useState( JSON.parse(localStorage.getItem("TODO_LIST")) )

   const removeTask = (id) => {
      const newList = []
      
      data.forEach( a => {
         if( a.id !== id)
         newList.push(a)
      })

      setData(newList)
   }

   const addTask = (name) => {
      console.log(name)
      const newTask = () => {
         return ({
            id: data.length,
            name: name,
            done: false
         })
      }
      setData([...data, newTask(name)])
      console.log(data)
   }


   const taskStatusToggle = (id) => {
      setData(
         data.map( a => {
            if( a.id === id) {
               return {...a, done: !a.done}
            } return a
         })
      )
   }

   const clearCompleted = () => {
      const newList = []
      
      data.forEach( a => {
         if(a.done !== true)
         newList.push(a)
      })

      setData(newList)
   }

   const taskController = (action, id, name) => {
      switch(action) {
         case 'STATUS_TOOGLE':
            taskStatusToggle(id)
            break
         case 'REMOVE_TASK':
            removeTask(id)
            break
         case 'ADD_TASK':
            addTask(name)
            break
         case 'CLEAR_COMPLETED':
            clearCompleted()
            break
      }
   }

   React.useEffect( () => {
      localStorage.setItem("TODO_LIST", JSON.stringify(data))  
   })

   return(
      <TodoContainer>
         <TodoAddNew taskController={taskController}/>
         <TodoList data={data} taskController={taskController}></TodoList>
         { data.length > 0 && <TodoFooter data={data} taskController={taskController} />}
      </TodoContainer>
   )
}

const TodoContainer = Styled.div`
   width: 90%;
   max-width: 540px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
`

export default Todo