import FooterLogo from '../assets/img/brewdog_white.png'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center bg-gray-800 py-10">
            <img className="h-20" src={FooterLogo} alt="brewdog" />
            <p className="text-gray-300 font-semibold text-xs">Copyright &#169; 2021</p>
        </footer>
    )
}

export default Footer
