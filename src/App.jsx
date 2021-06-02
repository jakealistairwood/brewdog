import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BrewHouse from './containers/BrewHouse'
import BeerPage from './containers/BeerPage'
import Filters from './components/Filters'
import { FiltersProvider } from './context/filtersContext'
import { useContext } from 'react'
import ApiContext from './context/apiContext'

const App = () => {

  const { beers } = useContext(ApiContext); 

  return (
    <Router>
      <FiltersProvider>
        <div className="w-full h-screen">
          <Header />
          <Filters />
          <Switch>
            <Route exact path="/" render={(props) => (
              <BrewHouse {...props} />
            )} />
            <Route exact path="/beers/:id">
              <BeerPage beers={beers} />
            </Route>
            {/* <Route exact path="/beers/:id" render={(props) => (
              <BeerPage />
            )} /> */}
          </Switch>
          {/* <BrewHouse /> */}
          <Footer />
        </div>
      </FiltersProvider>
    </Router>
  )
}

export default App

