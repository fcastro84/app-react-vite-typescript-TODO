import { FilterValue, ID, Todo } from "../interfaces/types"

export const INITIAL_STATE: State = {
    sync: false,
    todos: [],
    filterSelected: 'all'
}

export interface State {
    sync: boolean,
    todos: Todo[],
    filterSelected: FilterValue
}
type ActionType = 
    { type: 'ADD_NEW_TODO', payload: { title: string }} |
    { type: 'EDIT_TITLE_TODO', payload: { id: ID, title: string }} |
    { type: 'COMPLETED_TODO', payload: { id: ID, completed: boolean }} |
    { type: 'CLOSED_TODO', payload: { id: ID }} |
    { type: 'FILTER_CHANGE', payload: { filter: FilterValue }} |
    { type: 'INIT_TODO', payload: { todos: Todo[] }} |
    { type: 'CLEAR_COMPLETED_TODO'}

export const todoReducer = ( state: State, action: ActionType ) => {

    switch (action.type) {
        case 'INIT_TODO':
            {
            const { todos } = action.payload
            return {
                ...state,
                todos,
                sync: false
            }
              
            }
        case 'ADD_NEW_TODO':
            {
                const { title } = action.payload
                const newTodo: Todo = {
                    id: crypto.randomUUID(),
                    title,
                    completed: false
                  }
            return {
                ...state,
                todos: [...state.todos, newTodo],
                sync: true
            }
              
            }
        case 'EDIT_TITLE_TODO':
            {
                const { id, title } = action.payload
                const newTodos = state.todos.map( todo => {
                    if(todo.id === id){
                      return {
                        ...todo,
                        title
                      }
                    }
                    return todo
                  })
              
                return {
                    ...state,
                    todos: newTodos,
                    sync: true
                }
                  
            }
        case 'CLEAR_COMPLETED_TODO': 
            {
                return {
                    ...state,
                    todos: state.todos.filter(element => !element.completed),
                    sync: true
                }
            }
        case 'COMPLETED_TODO':
            {
                const { id, completed } = action.payload
                const newTodos = state.todos.map( element => {
                    if( element.id === id){
                     return {
                       ...element,
                       completed
                     }
                    }
                    return element
                 })
             
                 return {
                    ...state,
                    todos: newTodos,
                    sync: true
                }
            }
        case 'CLOSED_TODO':
            {
                const { id } = action.payload

                return {
                    ...state,
                    todos: state.todos.filter( element => element.id !== id),
                    sync: true
                }
            }
        case 'FILTER_CHANGE': 
            {
                const { filter } = action.payload
                return {
                    ...state,
                    filterSelected: filter,
                    sync: true
                }
            }
        default:
            return state
    }

}

