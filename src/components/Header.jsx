import Logo from '../assets/img/brewdog-logo.png'

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-gray-900 p-6">
            <div className="h-20">
                <img className="h-full" src={Logo} />
            </div>
        </header>
    )
}

export default Header
