import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Booking from './components/views/Booking/Booking';
import NewBooking from './components/views/NewBooking/NewBooking';
import Events from './components/views/Events/Events';
import NewEvents from './components/views/NewEvents/NewEvents';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import NewOrder from './components/views/NewOrder/NewOrderContainer';
import SingleOrder from './components/views/SingleOrder/SingleOrder';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path ={process.env.PUBLIC_URL + '/'} component={ Dashboard } />
            <Route exact path ={process.env.PUBLIC_URL + '/login'} component={ Login } />
            <Route exact path ={process.env.PUBLIC_URL + '/tables'} component={ Tables } />
            <Route exact path ={process.env.PUBLIC_URL + '/waiter'} component={ Waiter } />
            <Route exact path ={process.env.PUBLIC_URL + '/kitchen'} component={ Kitchen } />
            <Route exact path ={process.env.PUBLIC_URL + '/tables/booking/123'} component={ Booking } />
            <Route exact path ={process.env.PUBLIC_URL + '/tables/booking/new'} component={ NewBooking } />
            <Route exact path ={process.env.PUBLIC_URL + '/tables/events/123'} component={ Events } />
            <Route exact path ={process.env.PUBLIC_URL + '/tables/events/new'} component={ NewEvents } />
            <Route exact path ={process.env.PUBLIC_URL + '/waiter/order/new'} component={ NewOrder } />
            <Route exact path ={process.env.PUBLIC_URL + '/waiter/order/123'} component={ SingleOrder } />    
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
