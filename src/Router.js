import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from  './Components/Pages/Home'
import Login from './Components/Pages/Login/Login'
import Login1 from './Components/Pages/Login/Login1'
function AppRouter() {
    return (
        <Router basename="/reactdev">
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Home" exact component={Home}/>
                <Route path="/Login1" exact component={Login1}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
