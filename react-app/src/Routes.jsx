import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Principal from './Pages/Principal';

 export default function Routes(){
    return(
        <Switch>
             <Route exact path='/' component={Principal} />
        </Switch>
    )
}