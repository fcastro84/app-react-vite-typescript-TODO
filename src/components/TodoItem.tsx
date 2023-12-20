import { ChangeEventHandler, Dispatch, KeyboardEvent, useEffect, useRef, useState } from "react"
import { ID } from "../interfaces/types"

interface TodoItemProps {
  handleColsed: ( id: ID ) => void,
  handleCompleted: ( id: ID, completed: boolean) => void,
  saveTitle: ({id, title}: {id: ID, title: string}) => void,
  title: string,
  id: ID,
  completed: boolean,
  editing: string,
  setEditing: Dispatch<React.SetStateAction<string>>
}

const TodoItem = ({ handleColsed, handleCompleted, saveTitle, title, id, completed, editing, setEditing }: TodoItemProps) => {

    const [titleTodo, setTitleTodo] = useState(title)
    const inputEditTitle = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputEditTitle.current?.focus()
      }, [editing])

    const handleCangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitleTodo(event.target.value)
      }

    const handleKeyDownEdit= (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            setTitleTodo(titleTodo.trim())
    
            if( titleTodo !== title ){
              saveTitle({id, title: titleTodo})
            }
    
            if(titleTodo === ''){
              handleColsed(id)
            }
    
            setEditing('')
        }
    
        if( event.key === 'Escape'){
          setTitleTodo(titleTodo)
          setEditing('')
        }
    
        
      }
    
  return (
    <>
        <div className="view">
                <input type="checkbox" className="toggle" name="completed" checked={completed} onChange={(event) =>handleCompleted( id, event.target.checked )}  />
                <label>{ title }</label>
                <button className="destroy" onClick={() => handleColsed(id)}></button>
        </div>
        <input 
            className="edit"
            value={titleTodo}
            ref={inputEditTitle}
            onChange={handleCangeTitle}
            onBlur={()=> setEditing('')}
            onKeyDown={(event) => handleKeyDownEdit(event)}
            />
    </>
  )
}

export default TodoItem
