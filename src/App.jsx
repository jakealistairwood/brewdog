import { useState, useEffect } from 'react'
import BeerItem from './components/BeerItem'
import Header from './components/Header'
import axios from 'axios';

const App = () => {

  const [ beers, setBeers ] = useState([]);

  useEffect(() => {
    const fetchBeers = async() => {
      const res = await axios.get('https://api.punkapi.com/v2/beers');
      setBeers(res.data);
    }
    fetchBeers()
  }, [])

  console.log(beers);

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="flex items-end justify-center w-4/5 h-1/3 mx-auto bg-gray-300" style={{
        backgroundImage: "url('/img/banner-img.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "0 -100px"

      }}>
        <h1 className="mb-10 uppercase text-5xl tracking-wider font-bold text-white">Discover our award-winning Range</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-4/5 mx-auto mt-20">
        {beers.map((beer) => (
          <BeerItem beer={beer} key={beer.id} />
        ))}
      </div>
    </div>
  )
}

export default App

