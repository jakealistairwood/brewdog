import { useContext } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import ApiContext from '../context/apiContext'

const Search = () => {

    const { setBeerName, fetchBeers } = useContext(ApiContext);

    return (
        <form className="flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-4 w-1/5">
            <SearchIcon className="h-6 text-gray-400" />
            <input 
                type="text"
                className="bg-transparent outline-none placeholder-gray-500" 
                placeholder="Search our library..." 
                onChange={(e) => {
                    setBeerName(e.target.value)
                    fetchBeers()
                }}
            />
        </form>
    )
}

export default Search
