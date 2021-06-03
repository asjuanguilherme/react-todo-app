import React from 'react'
import Styled from 'styled-components'

import TodoAddNew from './components/TodoAddNew'
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

const Todo = props => {

   const { themeController } = props

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

   if( ! JSON.parse(localStorage.getItem("TODO_LAST_ID")) ) {
      localStorage.setItem("TODO_LAST_ID", 3)
   }

   const [data, setData] = React.useState( JSON.parse(localStorage.getItem("TODO_LIST")) )

   const updateLastTaskId = () => {
      const lastIdValue = JSON.parse(localStorage.getItem("TODO_LAST_ID")) + 1
      localStorage.setItem("TODO_LAST_ID", lastIdValue)
   }

   const [filter, setFilter] = React.useState()

   const removeTask = (id) => {
      const newList = []
      
      data.forEach( a => {
         if( a.id !== id)
         newList.push(a)
      })

      setData(newList)
   }

   const addTask = (name) => {
      updateLastTaskId()
      const newTask = () => {
         return ({
            id: JSON.parse(localStorage.getItem("TODO_LAST_ID")),
            name: name,
            done: false
         })
      }
      setData([...data, newTask(name)])
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

   const taskController = (action, value) => {
      switch(action) {
         default:
            console.log("No action")
            return false
         case 'STATUS_TOOGLE':
            taskStatusToggle(value)
            break
         case 'REMOVE_TASK':
            removeTask(value)
            break
         case 'ADD_TASK':
            addTask(value)
            break
         case 'CLEAR_COMPLETED':
            clearCompleted()
            break
         case 'SET_FILTER':
            setFilter(value)
            break
      }
   }

   React.useEffect( () => {
      localStorage.setItem("TODO_LIST", JSON.stringify(data))
   })

   return(
      <TodoContainer>
         <TodoHeader themeController={themeController} />
         <TodoAddNew taskController={taskController}/>
         <TodoList data={data} taskController={taskController} filter={filter} ></TodoList>
         <TodoFooter data={data} taskController={taskController} filter={filter} />
      </TodoContainer>
   )
}

const TodoContainer = Styled.div`
   width: 90%;
   max-width: 540px;
   position: absolute;
   top: 0%;
   left: 50%;
   transform: translateX(-50%);
`

export default Todo