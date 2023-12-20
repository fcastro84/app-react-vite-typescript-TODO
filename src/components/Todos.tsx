import { useState } from "react"
import { ID, Todo } from "../interfaces/types"
import TodoItem from "./TodoItem"
import { useAutoAnimate } from "@formkit/auto-animate/react"


interface Todosprops {
    filteredTodos: Todo[],
    handleColsed: ( id: ID ) => void,
    handleCompleted: ( id: ID, completed: boolean) => void,
    saveTitle: ({id, title}: {id: ID, title: string}) => void
}

const Todos = ({filteredTodos, handleColsed, handleCompleted, saveTitle}: Todosprops ) => {

    const [editing, setEditing] = useState('')
    const [ parent ] = useAutoAnimate()
    
  return (
    <ul className="todo-list" ref={parent}>
        {
          filteredTodos.map( todo => {
            return (<li 
            key={todo.id} 
            className={
              `${todo.completed ? 'completed' : ''}
               ${editing === todo.id ? 'editing' : ''}`
            } 
            onDoubleClick={() => {
              setEditing(todo.id)
            }}
            >
            <TodoItem 
            handleColsed={handleColsed} 
            handleCompleted={handleCompleted} 
            saveTitle={saveTitle} 
            title={todo.title} 
            id={todo.id} 
            completed={todo.completed} 
            editing={editing} 
            setEditing={setEditing}  />  
              
            </li>)
            
          })
        }

      </ul>
  )
}

export default Todos
