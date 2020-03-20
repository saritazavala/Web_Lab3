import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';


const Event = ({
  event,
  onClick
}) => (
  <div className="event-wrapper" onClick={onClick}>
    <div className="event">

      <div className="event_info">
        <h1 className="titulo-info">Tipo: </h1> 
        {(Object.entries(Object.entries(event)[1])[1]).slice(1)}
      </div>

      <div className="event_info">
        <h1 className="titulo-info">Nota: </h1> 
        {(Object.entries(Object.entries(event)[3])[1]).slice(1)}
      </div>

      <div className="event_info">
        <h1 className="titulo-info">By: </h1> 
        {(Object.entries(Object.entries(event)[4])[1]).slice(1)}
      </div>

      <div className="event_info">
        <h1 className="titulo-info">Fecha: </h1> 
        {(Object.entries(Object.entries(event)[2])[1].toString().slice(1,23).replace(/-/g,"")).slice(1)} hrs
      </div>

      

    </div>
  </div>
);



export default connect(
  (state, { index }) => ({
    event: index
  }),
  (dispatch, { index } )=> ({
    onClick() {
      dispatch(actions.deleteEvent(Object.entries(index)[0][1]))
    },
  }),
)(Event);
