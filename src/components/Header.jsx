import Logo from '../assets/img/brewdog_black.png'
import { LoginIcon } from '@heroicons/react/solid'


const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white p-6 shadow-sm">
            <div className="h-14">
                <img className="h-full" src={Logo} alt="brewdog" />
            </div>
            <div className="flex items-center space-x-6">
                <button>Filters</button>
                <button className="flex items-center bg-black rounded-full text-white py-2 px-4">
                    <span>Login</span>
                    <LoginIcon className="h-6 ml-2" />
                </button>
            </div>
        </header>
    )
}

export default Header
