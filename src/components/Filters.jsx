import { useContext } from 'react';
import FiltersContext from '../context/filtersContext'
import ApiContext from '../context/apiContext'
import { XIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Search from './Search'

const Filters = () => {

    const { filtersOpen, toggleFilters } = useContext(FiltersContext);
    const { minABV, 
            setMinABV, 
            maxABV, 
            setMaxABV, 
            fetchBeers, 
            setBeerName 
        } = useContext(ApiContext);

    const toggleFiltersModal = 
    filtersOpen 
    ? 'fixed flex justify-center items-center top-0 left-0 right-0 h-screen w-screen bg-black bg-opacity-60 z-200' 
    : 'hidden';

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBeers();
    }

    return (
        <div className={toggleFiltersModal}>
            <form className="flex flex-col z-999 w-3/4 lg:w-1/3 bg-white p-6 rounded-md" onSubmit={handleSubmit}>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Filter Options</h3>
                    <XIcon className="h-6 text-gray-500 cursor-pointer" onClick={toggleFilters} />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center bg-gray-100 rounded-full px-4 py-2 space-x-4 mb-4">
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
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="minABV">Min ABV</label>
                        <div className="flex mb-4">
                            <label>{minABV}%</label>
                            <input
                                className="w-full ml-6" 
                                type="range" 
                                name="minABV" 
                                id="minABV"
                                min="0"
                                max={maxABV}
                                step="0.2"
                                value={minABV}
                                onInput={(e) => {
                                    setMinABV(e.target.value);
                                    fetchBeers();
                                }} 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="maxABV">Max ABV</label>
                        <div className="flex mb-4">
                            <label>{maxABV}%</label>
                            <input
                                className="w-full ml-6" 
                                type="range" 
                                name="maxABV" 
                                id="maxABV"
                                min={minABV}
                                max="20"
                                step="0.2"
                                value={maxABV}
                                onInput={(e) => {
                                    setMaxABV(e.target.value);
                                    fetchBeers();
                                }} 
                            />
                        </div>
                    </div>
                    <button className="bg-gray-800 rounded-full w-max py-2 px-6 text-white font-bold" onClick={toggleFilters}>Submit</button>
                </div>
            </form>    
        </div>
    )
}

export default Filters
