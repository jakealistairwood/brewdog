import { useContext } from 'react';
import Logo from '../assets/img/brewdog_black.png'
import { LoginIcon } from '@heroicons/react/solid'
import Search from '../components/Search'
import FiltersContext from '../context/filtersContext'


const Header = () => {

    const { filtersOpen, toggleFilters } = useContext(FiltersContext);

    return (
        <header className="flex justify-between items-center bg-white p-6 shadow-sm">
            <div className="h-14">
                <img className="h-full" src={Logo} alt="brewdog" />
            </div>
            <Search />
            <div className="flex items-center space-x-6">
                <button className="focus:outline-black" onClick={toggleFilters}>Filters</button>
                <button className="flex items-center bg-black rounded-full text-white py-2 px-4">
                    <span>Login</span>
                    <LoginIcon className="h-6 ml-2" />
                </button>
            </div>
        </header>
    )
}

export default Header
