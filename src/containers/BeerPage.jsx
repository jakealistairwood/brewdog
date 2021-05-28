import { useState, useEffect } from 'react'
import axios from "axios"

const BeerPage = (props) => {

    const [ beer, setBeer ] = useState();
    const [ loading, setLoading ] = useState(false);

    const id = props.match.params.id

    useEffect(() => {
        const fetchBeerData = async() => {
            const res = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            if(res && res.length > 0) {
                setLoading(true)
                setBeer(res.data[0])
            } else {
                setLoading(false)
            }
            // setBeer(res.data[0])
        }
        fetchBeerData();
    }, [])

    console.log(beer);

    return (
        <>
        {loading ? (
            <div className="flex flex-row w-3/5 mx-auto my-20">
            <div className="flex">
                <img src={beer.image_url} />
            </div>
            <div className="flex flex-col ml-40">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="font-black text-6xl">{beer.name}</h1>
                        <h3 className="italic text-gray-300 mt-2 text-2xl font-light">"{beer.tagline}"</h3>
                    </div>
                    <p className="rounded-full border-2 border-solid border-black py-2 px-5 font-bold text-xl">ABV: {beer.abv}%</p>
                </div>
                <p className="font-light my-4">{beer.description}</p>
                <ul className="my-4 bg-gray-100 p-6 w-max">
                    <h4 className="text-xl font-bold mb-2">Delicious with: </h4>
                    {beer.food_pairing.map(pairing => (
                        <li className="ml-4 list-disc font-light text-gray-700">{pairing}</li>
                    ))}
                </ul>
            </div>
        </div>
        ) : (
            <div>Api failed to load. Need to fix API request.</div>
        )}
        </>
    )
}

export default BeerPage;
