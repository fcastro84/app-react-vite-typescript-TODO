import { Todo } from "../interfaces/types.d"


const API_URL2 = 'https://api.jsonbin.io/v3/b/65832f321f5677401f110888'

export const fetchTodos = async (): Promise<Todo[]> => {
    
    try {
        const resp = await fetch(`${API_URL2}`,
        {
           method: 'GET',
           headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': import.meta.env.VITE_MASTER_KEY
           } 
        }
    )

    if(resp.ok){
        const { record: todos } = await resp.json() as { record: Todo[]}
        return todos
    }
    
    throw new Error("Error fetch of API");

    } catch (error) {
        console.log(error) 
        return []
    }
    
}

export const  updateTodos = async({todos}: { todos: Todo[]}): Promise<boolean> => {

    try {
        const resp = await fetch(`${API_URL2}`,
        {
           method: 'PUT',
           headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': import.meta.env.VITE_MASTER_KEY
           },
           body: JSON.stringify(todos)
        })
    
    return resp.ok
    } catch (error) {
        console.log(error)
        return false
    }
    

}