import range from 'lodash/range';
import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import * as selectors from '../../reducers';
import Baby from '../Baby';


const Babies = ({ number }) => (
  <div className="babies">
    {
      number.length === 0 ? (
        <h1 className="warning-title">
          {'No hay babies agregados'}
        </h1>
      ) : (
        (number).map(
          index => (
            <Baby
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
    number: selectors.getBabies(state),
  }),
)(Babies);
