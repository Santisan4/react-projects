import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Price From: </label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>all</option>
          <option value='laptops'>laptops</option>
          <option value='smartphones'>smartphones</option>
          <option value='groceries'>groceries</option>
        </select>
      </div>

    </section>
  )
}
