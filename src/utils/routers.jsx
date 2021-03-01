import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PizzaDetail from '../pages/PizzaDetail';

const Routes = () => (
  <Switch>
    <Route path="/pizza-detail/:id">
      <PizzaDetail />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
