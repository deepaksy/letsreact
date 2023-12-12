import { FormEvent } from 'react'
import './index.scss'

const SearchBar = () => {
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
    }
  return (

        <search>
          <form onSubmit={handleSubmit}>
            <input name='search' id='search' placeholder='search' />
          </form>
    </search>
  )
}

export default SearchBar