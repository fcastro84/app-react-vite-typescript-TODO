import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import useTodo from "./hooks/useTodo";


function App() {

  const { 
    todosCompleted, 
    todosPending, 
    filteredTodos, 
    filterSelected,
    saveTodo, 
    saveTitle, 
    handleClearAllCompleted, 
    handleColsed, 
    handleCompleted,
    setFilterSelected
  } = useTodo()

  return (
    <div className="todoapp">
      <Header saveTodo={saveTodo} />
      
      <Todos filteredTodos={filteredTodos} handleColsed={handleColsed} handleCompleted={handleCompleted} saveTitle={saveTitle} />

      <Footer todosPending={todosPending} todosCompleted={todosCompleted} handleClearAllCompleted={handleClearAllCompleted} filterSelected={filterSelected} setFilterSelected={setFilterSelected} />

      
    </div>
  )
}

export default App
