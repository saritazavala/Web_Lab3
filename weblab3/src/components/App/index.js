import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';

import { configureStore } from '../../store';
import Baby from '../Baby'
import Events from '../Events'

const store = configureStore();

const App = () => (
    <Provider store={store}>
       <BrowserRouter>
       <div>
          <Route path= "/" exact component={Events} />
          <Route path="/Baby" component= {Baby} />
        </div>
        </BrowserRouter>
    </Provider>

);


export default App;
