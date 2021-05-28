import { useContext } from 'react';
import Logo from '../assets/img/brewdog_black.png'
import { PencilAltIcon } from '@heroicons/react/solid'
import Search from '../components/Search'
import FiltersContext from '../context/filtersContext'


const Header = ({ fetchBeers, setBeerName }) => {

    const { filtersOpen, toggleFilters } = useContext(FiltersContext);

    return (
        <header className="flex justify-between items-center bg-white p-6 shadow-sm">
            <a href="/" className="h-14">
                <img className="h-full" src={Logo} alt="brewdog" />
            </a>
            <Search fetchBeers={fetchBeers} setBeerName={setBeerName} />
            <div className="flex items-center space-x-6">
                <button className="focus:outline-black" onClick={toggleFilters}>Filters</button>
                <button className="flex items-center bg-black rounded-full text-white py-2 px-4">
                    <span>Login</span>
                    <PencilAltIcon className="h-6 ml-2" />
                </button>
            </div>
        </header>
    )
}

export default Header
