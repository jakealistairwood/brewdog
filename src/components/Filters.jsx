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
            <form className="flex flex-col z-999 w-1/3 bg-white p-6 rounded-md">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Filter Options</h3>
                    <XIcon className="h-6 text-gray-500 cursor-pointer" onClick={toggleFilters} />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input 
                        type="range" 
                        name="" 
                        id="" 
                    />
                </div>
            </form>    
        </div>
    )
}

export default Filters
