import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
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
    <div>
      <Header />
      <Sidebar />
      <h1>App is working</h1>
    </div>
  )
}

export default App

