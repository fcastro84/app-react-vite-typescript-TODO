import NewTodo from "./NewTodo"


export interface HeaderProps {
    saveTodo: ( title: string ) => void 
}

const Header = ( {saveTodo}: HeaderProps ) => {
    
  return (
    <header className='header'>
      <h1>Todo List 
        <img
          style={{ width: '60px', height: 'auto' }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'></img>
      </h1>
      <NewTodo saveTodo={saveTodo} />
    </header>
  )
}

export default Header
