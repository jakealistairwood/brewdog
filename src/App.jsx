import { useState, useEffect } from 'react'
import BeerItem from './components/BeerItem'
import Header from './components/Header'
import Footer from './components/Footer'
import Filters from './components/Filters'
import { useContext } from 'react'
import axios from 'axios';
import { FiltersProvider } from './context/filtersContext'
import ApiContext from './context/apiContext'

const App = () => {

  // const { beers, fetchBeers, setBeerName } = useContext(ApiContext);
  const { beers } = useContext(ApiContext);
  // const [ beers, setBeers ] = useState([]);
  // const [ beerName, setBeerName ] = useState();

  // const searchByName = beerName ? `beer_name=${beerName}` : '';


  // const fetchBeers = async() => {
  //   const res = await axios.get(`https://api.punkapi.com/v2/beers?${searchByName}`);
  //   setBeers(res.data);
  // }

  // useEffect(() => {
  //   fetchBeers()
  // }, [])

  return (
    <FiltersProvider>
      <div className="w-full h-screen">
        <Header />
        <Filters />
        <div className="flex items-end justify-center w-4/5 h-1/3 mx-auto bg-gray-300" style={{
          backgroundImage: "url('/img/banner-img.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0 -100px"
        }}>
          <h1 className="mb-10 uppercase text-5xl tracking-wider font-bold text-white">Discover our award-winning Range</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 w-4/5 mx-auto my-20">
          {beers.map((beer) => (
            <BeerItem beer={beer} key={beer.id} />
          ))}
        </div>
        <Footer />
      </div>
    </FiltersProvider>
  )
}

export default App

