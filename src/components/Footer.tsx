
import Filters from "./Filters"
import { FilterValue } from "../interfaces/types"

interface FooterProps {
    todosPending: number,
    todosCompleted: boolean,
    handleClearAllCompleted: () => void,
    filterSelected: string,
    setFilterSelected: (filter: FilterValue) => void
}

const Footer = ({ todosPending, handleClearAllCompleted, filterSelected, setFilterSelected, todosCompleted }: FooterProps) => {

  return (
    <footer className="footer">
        <span className="todo-count">
          <strong>{ todosPending} Pending</strong>
        </span>
      
        <Filters filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
        {
            todosCompleted && <button className="clear-completed" onClick={handleClearAllCompleted}>Clear Completed</button>
        }
        
      </footer>
  )
}

export default Footer
