import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Breweries from "./Breweries"

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Breweries} />
      </Switch>
    </Router>
  )
}

export default App
