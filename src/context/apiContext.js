import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

    const [ beers, setBeers ] = useState([]);
    const [ beerName, setBeerName ] = useState();
    const [ minABV, setMinABV ] = useState(0);
    const [ maxABV, setMaxABV ] = useState(20);

    const searchByName = beerName ? `&beer_name=${beerName}` : '';
    const searchByMinABV = `&abv_gt=${minABV}`;
    const searchByMaxABV = `&abv_lt=${maxABV}`;

    const fetchBeers = async() => {
        const res = await axios.get(`https://api.punkapi.com/v2/beers?per_page=48${searchByName}${searchByMinABV}${searchByMaxABV}`);
        setBeers(res.data);
    }

    useEffect(() => {
        fetchBeers()
    }, [])

    return (
        <ApiContext.Provider value={
            { beers, 
              fetchBeers, 
              setBeerName,
              minABV, 
              setMinABV,
              maxABV,
              setMaxABV 
            }
        }>
            {children}
        </ApiContext.Provider>
    )
}
export default ApiContext;