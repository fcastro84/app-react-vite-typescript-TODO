import { useEffect, useReducer } from "react"
import { FilterValue, ID, filters } from "../interfaces/types.d"
import { INITIAL_STATE, todoReducer } from "../reducer/todoReducer"
import { fetchTodos, updateTodos } from "../services/todos"

const useTodo = () => {

    const [{ todos, filterSelected, sync }, dispatch] = useReducer(todoReducer, INITIAL_STATE)
   
    
    
    const handleColsed = ( id: ID ) => {
        dispatch({type: 'CLOSED_TODO', payload: { id }})
    }
    
    const handleCompleted = (id: ID, checked: boolean) => {
        dispatch({type: 'COMPLETED_TODO', payload: { id, completed: checked }})
    }
  
    const handleClearAllCompleted = () => {
        dispatch({type: 'CLEAR_COMPLETED_TODO'})
    }
  
    const saveTodo = ( text: string) => {
        dispatch({type: 'ADD_NEW_TODO', payload: { title: text }})
    }
  
    const saveTitle = ({id, title}: { id : ID, title:string}) => {
        dispatch({type: 'EDIT_TITLE_TODO', payload: { id, title }})
    }

    const setFilterSelected = (filter: FilterValue) => {
        dispatch({type: 'FILTER_CHANGE', payload: { filter }})
    }

    useEffect(() => {
        fetchTodos()
            .then(data => {
                dispatch({type: 'INIT_TODO', payload: { todos: data }})
            })
    }, [])

    useEffect(() => {
      if(sync){
        updateTodos({todos})
            .catch(console.error)
      }
    }, [todos, sync])
    

   const filteredTodos = todos.filter( element => {
      if(filterSelected === filters.ACTIVE){
        return !element.completed
      }
  
      if(filterSelected === filters.COMPLETED){
        return element.completed
      }
  
      return true
    })

    const todosPending = filteredTodos.filter(element => !element.completed).length
    const todosCompleted = filteredTodos.some( element => element.completed )

    return {
        todosPending,
        todosCompleted,
        filteredTodos,
        filterSelected,
        saveTodo,
        saveTitle,
        handleColsed,
        handleClearAllCompleted,
        handleCompleted,
        setFilterSelected
    }

}

export default useTodo
