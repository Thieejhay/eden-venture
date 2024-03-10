import React from "react";
import './css/global.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Profile from "./components/Profile";
import Wecreate from "./components/Wecreate";
import Mnch from "./components/Mnch";
import Abuja from "./components/Abuja";
import Lagos from "./components/Lagos";
import Register2 from "./components/Register2";
// import Register from "./components/Register";

const RedirectToGoogleForm = () => {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe8ZG-YVZD3Nk_FuD40v2TJ2dv0qxvqIY-62VsMJAC9mqRZvQ/viewform';
  return null; // This component doesn't render anything
};

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
        <Route path='/wecreate'>
          <Wecreate />
        </Route>
        <Route path='/mnch' >
          <Mnch />
        </Route>
        <Route path='/abuja-summit'>
          <Abuja />
        </Route>
        <Route path='/Lagos-summit'>
          <Lagos />
        </Route>
        <Route path='/register'>
          {RedirectToGoogleForm}
        </Route>
        <Route path='/eden-register'>
          <Register2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
