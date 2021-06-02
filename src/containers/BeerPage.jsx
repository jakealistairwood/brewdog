import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'

const BeerPage = (props) => {

    const [ beer, setBeer ] = useState();
    const [ loading, setLoading ] = useState(false)

    const { id } = useParams()

    const fetchBeer = async() => {
        const res = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        console.log(res.data[0]);
        setBeer(res.data[0]);
        setLoading(true);
    }

    useEffect(() => {
        fetchBeer()
    }, [id])

    return (
        <>
        {loading ? (
            <div className="flex flex-col">
                <div className="flex flex-row w-3/5 mx-auto my-20">
                    <div className="flex">
                        <img src={beer.image_url} />
                    </div>
                    <div className="flex flex-col ml-40">
                        <h1 className="font-black text-6xl">{beer.name}</h1>
                        <div className="flex justify-between items-center">
                            <h3 className="italic text-gray-300 mt-2 text-2xl font-light">"{beer.tagline}"</h3>
                            <p className="rounded-full border-2 border-solid border-black py-2 px-5 w-max font-bold text-xl">ABV: {beer.abv}%</p>
                        </div>
                        <p className="font-light my-6">{beer.description}</p>
                        <ul className="my-4 bg-gray-100 p-6 w-max">
                            <h4 className="text-xl font-bold mb-2">Delicious with: </h4>
                            {beer.food_pairing.map(pairing => (
                                <li className="ml-4 list-disc font-light text-gray-700 cursor-default">{pairing}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 w-screen">
                    <div className="flex flex-col w-2/3 mx-auto my-20">
                        <div className="flex flex-col items-center mb-14">
                            <h2 className="text-center text-4xl font-bold mb-6">Brewers Information</h2>
                            <div className="h-1 w-20 bg-gray-400 mb-6"></div>
                            <p className="font-light text-gray-600 italic text-center w-2/3"><span className="font-bold">Brewers tip:</span> {beer.brewers_tips}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            <ul className="p-8 text-center border-solid border-2 border-gray-200 rounded-lg">
                                <h4 className="text-2xl font-bold mb-4">Malts</h4>
                                {beer.ingredients.malt.map(malt => (
                                    <li className="ml-6 font-light">{malt.name} = {malt.amount.value} {malt.amount.unit ? 'kg' : ''}</li>
                                ))}
                            </ul>
                            <ul className="p-8 text-center border-solid border-2 border-gray-200 rounded-lg">
                                <h4 className="text-2xl font-bold mb-4">Hops</h4>
                                {beer.ingredients.hops.map(hop => (
                                    <li className="ml-6 font-light">{hop.name} = {hop.amount.value} {hop.amount.unit ? 'kg' : ''}</li>
                                ))}
                            </ul>
                            <ul className="p-8 text-center border-solid border-2 border-gray-200 rounded-lg">
                                <h4 className="text-2xl font-bold mb-4">Attributes</h4>
                                <li className="ml-6 font-light">ABV = {beer.abv}%</li>
                                <li className="ml-6 font-light">IBU = {beer.ibu}</li>
                                <li className="ml-6 font-light">EBC = {beer.ebc}</li>
                                <li className="ml-6 font-light">pH = {beer.ph}</li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <Link to="/">
                                <a className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full">Go Back</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        
        ) : (
            <div>Currently loading data. It should only take a few seconds.</div>
        )}
        </>
    )
}

export default BeerPage;
