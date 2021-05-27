import { useContext } from 'react'
import ApiContext from '../context/apiContext'
import BeerItem from '../components/BeerItem'

const BrewHouse = () => {

    const { beers } = useContext(ApiContext);

    return (
        <>
            <div className="flex items-end justify-center w-4/5 h-1/3 mx-auto bg-gray-300" style={{
                backgroundImage: "url('/img/banner-img.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "0 -100px"
            }}>
                <h1 className="mb-10 uppercase text-5xl tracking-wider font-bold text-white">Discover our award-winning Range</h1>
            </div>
            {beers.length === 0 ? (
                <div className="flex items-center justify-center my-20">
                    <h4 className="font-bold text-4xl">Sorry, we couldn't find anything by that name.</h4>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 w-4/5 mx-auto my-20">
                    {beers.map((beer) => (
                        <BeerItem beer={beer} key={beer.id} />
                    ))}
                </div>
            )}
        </>
    )
}

export default BrewHouse
