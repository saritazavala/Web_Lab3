import React from 'react';

import BabyForm from './form'
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Baby = () => (
  <div className="wrapper">
      <div className="form-wrapper">
          <div className="header">
              <label className="text">
                  {'Babies'}
                  </label>
          </div>
          <BabyForm />
      </div>   
  </div>
);

export default Baby;