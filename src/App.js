import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Profile from "./components/Profile";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
