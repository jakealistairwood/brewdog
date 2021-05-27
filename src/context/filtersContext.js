import { createContext, useState } from 'react'

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {

    const [ filtersOpen, setFiltersOpen ] = useState(false);

    const toggleFilters = () => {
        setFiltersOpen(!filtersOpen)
    }

    return (
        <FiltersContext.Provider value={{ filtersOpen, setFiltersOpen, toggleFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}

export default FiltersContext;