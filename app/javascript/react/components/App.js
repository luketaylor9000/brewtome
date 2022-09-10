import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Breweries from "./Breweries/BreweriesContainer"
import BreweryShowPage from "./Breweries/BreweryShowPage"

export const App = (props) => {

  return (
    <div className="react-app">
    <Router>
      <Switch>
        <Route exact path="/" component={Breweries} />
        <Route exact path="/breweries/:id" component={BreweryShowPage} />
      </Switch>
    </Router>
    </div>
  )
}

export default App
