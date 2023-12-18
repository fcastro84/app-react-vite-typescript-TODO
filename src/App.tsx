import { KeyboardEventHandler, useState } from "react"
import { todo } from "./mock/todoList"
import { BUTTON_FILTERS, FilterValue, ID, Todo, filters } from './interfaces/types.d';

function App() {

  const [todos, setTodos] = useState(todo)
  const [filterSelected, setFilterSelected] = useState('all')
  const [inputValue, setInputValue] = useState('')

  const handleColsed = ( id: ID ) => {

    const newTodos = todos.filter( element => element.id !== id)
    setTodos( newTodos )
  }
  
  const handleCompleted = (id: ID, checked: boolean) => {
    const newTodos = todos.map( element => {
       if( element.id === id){
        return {
          ...element,
          completed: checked
        }
       }
       return element
    })

    setTodos(newTodos)

  }

  const handleClickFilter = (filter: FilterValue) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter( element => {
    if(filterSelected === filters.ACTIVE){
      return !element.completed
    }

    if(filterSelected === filters.COMPLETED){
      return element.completed
    }

    return true
  })

  const handleClearAllCompleted = () => {
    const newTodos = todos.filter( element => !element.completed)
    setTodos(newTodos)
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if(event.key === 'Enter' && inputValue !== ''){
      saveTodo(inputValue)
      setInputValue('')
    }
  }

  const saveTodo = ( text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: text,
      completed: false
    }

    setTodos( prevValue => [...prevValue, newTodo])
  }

  const todosPending = filteredTodos.filter(element => !element.completed).length
  return (
    <div className="todoapp">
      <header className='header'>
      <h1>Todo List 
        <img
          style={{ width: '60px', height: 'auto' }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'></img>
      </h1>
      <input
      className='new-todo'
      value={inputValue}
      onChange={(e) => { setInputValue(e.target.value) }}
      onKeyDown={handleKeyDown}
      placeholder='¿Qué quieres hacer?'
      autoFocus
    />
    </header>
      <ul className="todo-list">
        {
          filteredTodos.map( todo => {
            return (<li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <div className="view">
                <input type="checkbox" className="toggle" name="completed" checked={todo.completed} onChange={(event) =>handleCompleted( todo.id, event.target.checked )}  />
                <label>{ todo.title }</label>
                <button className="destroy" onClick={() => handleColsed(todo.id)}></button>
              </div>
              
            </li>)
            
          })
        }

      </ul>

      <footer className="footer">
        <span className="todo-count">
          <strong>{ todosPending} Pending</strong>
        </span>
      
        <ul className="filters">
          {
            Object.entries(BUTTON_FILTERS).map( ([key, { title, href}]) => {
              const isSelected = key === filterSelected
              const className = isSelected ? 'selected' : ''
              return (<li key={key}>

                <a href={href} className={className} onClick={handleClickFilter(key as FilterValue)}>{title}</a>
              </li>)
            })
          }
        </ul>
        <button className="clear-completed" onClick={handleClearAllCompleted}>Clear Completed</button>
      </footer>

      
    </div>
  )
}

export default App
