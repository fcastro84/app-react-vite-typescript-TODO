import { MouseEvent } from "react"
import { BUTTON_FILTERS, FilterValue } from "../interfaces/types.d"

interface FilterProps {
    filterSelected: string,
    setFilterSelected: (filter: FilterValue) => void
}

const Filters = ({filterSelected, setFilterSelected}: FilterProps) => {

    const handleClickFilter = (filter: FilterValue) => (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setFilterSelected(filter)
      }

  return (
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
  )
}

export default Filters
