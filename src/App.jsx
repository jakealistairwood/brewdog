import { useState, useEffect } from 'react'
import BeerItem from './components/BeerItem'
import Header from './components/Header'
import Footer from './components/Footer'
import BrewHouse from './containers/BrewHouse'
import Filters from './components/Filters'
import { FiltersProvider } from './context/filtersContext'

const App = () => {

  return (
    <FiltersProvider>
      <div className="w-full h-screen">
        <Header />
        <Filters />
        <BrewHouse />
        <Footer />
      </div>
    </FiltersProvider>
  )
}

export default App

