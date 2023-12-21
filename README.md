# Crear un TodoMVC con TypeScript

- [✅] Inicializar proyecto con Vite
- [✅] Añadir linter para TypeScript + React
- [✅] Añadir estilos del TodoMVC
- [✅] Listar todos los TODOs
- [✅] Poder borrar un TODO
- [✅] Marcar TODO como completado
- [✅] Añadir forma de filtrar TODOs (Footer)
- [✅] Mostrar número de TODOs pendientes (Footer)
- [✅] Añadir forma de borrar todos los TODOs completados
- [✅] Crear Header con input (Header)
- [✅] Crear un TODO (Header)
- [✅] Poder editar el texto de un TODO (Doble click)
- [✅] Añadir animaciones con AutoAnimate
- [✅] Pasar a Reducer
- [✅] Sincronizar con el backend

## Inicializar proyecto

`$ yarn create vite`
TypeScript + SWC

## Añadir estilos del TodoMVC

```sh
yarn add todomvc-app-css
```

En el main.tsx:

```tsx
import 'todomvc-app-css/index.css'
```

## Añadir animaciones con AutoAnimate

```
yarn add @formkit/auto-animate -E
```

En el `Todos.tsx`:

```tsx
import { useAutoAnimate } from '@formkit/auto-animate/react'

const [parent] = useAutoAnimate(/* optional config */)

<ul className='todo-list' ref={parent}>
```