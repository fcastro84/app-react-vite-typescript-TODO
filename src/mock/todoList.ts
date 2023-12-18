import { Todo } from "../interfaces/types";

export const todo: Todo[] = [
    {
        id: crypto.randomUUID(),
        title: 'Todo 1',
        completed: true
    },
    {
        id: crypto.randomUUID(),
        title: 'Todo 2',
        completed: false
    },
    {
        id: crypto.randomUUID(),
        title: 'Todo 3',
        completed: false
    },
    {
        id: crypto.randomUUID(),
        title: 'Todo 4',
        completed: false
    }
]