import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllBabies from './AllBabies';
import AllEvents from './AllEvents';


const store = configureStore();

const App = () => (
  <Provider store={store}>
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/allbabies" component={AllBabies}/>
        <Route path="/allEvents" component={AllEvents} /> 
      </Switch>     
    </div>
  </Router>
</Provider>
);

export default App;
