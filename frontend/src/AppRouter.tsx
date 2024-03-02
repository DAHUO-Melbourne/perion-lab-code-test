import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import Summary from './pages/summary';
import Games from './pages/games';

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/summary' exact component={Summary} />
      <Route path='/games' exact component={Games} />
    </Switch>
  )
}

export default AppRouter;