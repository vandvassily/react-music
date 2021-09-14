import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Recommend from '../views/recommend';
import Main from '../views/main';

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/recommend" component={Recommend} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
