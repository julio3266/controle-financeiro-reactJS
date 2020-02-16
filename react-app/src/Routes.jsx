import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Principal from './Pages/Principal';
import Financeiro from './Pages/Financeiro';

 export default function Routes(){
    return(
        <Switch>
             <Route exact path='/' component={Principal} />
             <Route exact path='/financeiro' component={Financeiro} />
        </Switch>
    )
}