import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

    const [ beers, setBeers ] = useState([]);
    const [ beerName, setBeerName ] = useState();

    const searchByName = beerName ? `beer_name=${beerName}` : '';

    console.log(beers);

    const fetchBeers = async() => {
        const res = await axios.get(`https://api.punkapi.com/v2/beers?${searchByName}`);
        setBeers(res.data);
    }

    useEffect(() => {
        fetchBeers()
    }, [])

    return (
        <ApiContext.Provider value={{ beers, fetchBeers, setBeerName }}>
            {children}
        </ApiContext.Provider>
    )
}
export default ApiContext;