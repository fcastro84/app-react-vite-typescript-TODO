import { KeyboardEventHandler, useState } from "react"
import { HeaderProps } from "./Header"


const NewTodo = ({saveTodo}: HeaderProps) => {
    const [inputValue, setInputValue] = useState('')
    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if(event.key === 'Enter' && inputValue !== ''){
          saveTodo(inputValue)
          setInputValue('')
        }
      }
  return (
    <input
      className='new-todo'
      value={inputValue}
      onChange={(e) => { setInputValue(e.target.value) }}
      onKeyDown={handleKeyDown}
      placeholder='¿Qué quieres hacer?'
      autoFocus
    />
  )
}

export default NewTodo
