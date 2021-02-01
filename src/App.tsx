import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home'
import AboutMe from './AboutMe'
import WorkExperience from './WorkExperience'

const App = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/work-experience">
                    <WorkExperience/>
                </Route>
                <Route exact path="/about-me">
                    <AboutMe/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;