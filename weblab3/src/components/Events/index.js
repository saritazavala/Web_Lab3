import range from 'lodash/range';
import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';
import Event from '../Event';

const Events = ({ number }) => (
  <div className="events">
    {
      number.length === 0 ? (
        <h3 className="warning-title">
          {'No hay actividades '}
        </h3>
      ) : (
        (number).map(
          index => (
            <Event
              key={index}
              index={index}
            />
          ),
        )
      )
    }
  </div>  
);


export default connect(
  state => ({
    number: selectors.getEvents(state),
  }),
)(Events);
