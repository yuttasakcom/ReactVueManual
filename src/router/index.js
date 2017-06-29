import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => <div>Hello</div>

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
    </Switch>
  </Router>
)

export default Routes