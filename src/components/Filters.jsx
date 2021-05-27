import { useContext } from 'react';
import FiltersContext from '../context/filtersContext'
import { XIcon } from '@heroicons/react/solid'

const Filters = () => {

    const { filtersOpen, toggleFilters } = useContext(FiltersContext);

    const toggleFiltersModal = 
    filtersOpen 
    ? 'fixed flex justify-center items-center top-0 left-0 right-0 h-screen w-screen bg-black bg-opacity-60 z-200' 
    : 'hidden';

    return (
        <div className={toggleFiltersModal}>
            <form className="z-999 w-1/3 bg-white p-6 rounded-md">
                <div className="flex justify-between items-center">
                    <h1>Filter Options</h1>
                    <XIcon className="h-6 text-gray-500 cursor-pointer" onClick={toggleFilters} />
                </div>
            </form>    
        </div>
    )
}

export default Filters
