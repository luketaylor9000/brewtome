import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Breweries from "./Breweries/BreweriesContainer"
import BreweryTile from "./Breweries/BreweryTile"

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Breweries} />
        <Route exact path="/breweries/:id" component={BreweryTile} />
      </Switch>
    </Router>
  )
}

export default App
