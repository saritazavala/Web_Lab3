import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import * as selectors from '../../reducers';
import * as selectedActions from '../../actions/selectedBaby';


const Baby = ({
  baby, 
  name, 
  lastName, 
  isSelected = false,
  onClick
}) => (
  <div
    className={
      `
        baby-wrapper
        ${isSelected ? 'baby--selected' : ''}
      `
    }
    onClick={onClick}
  >
    <div className="baby">
      <div className="baby_info">
        {(Object.entries(Object.entries(baby)[1])[1]).slice(1)}
      </div>

      <div className="baby_info">
        {(Object.entries(Object.entries(baby)[2])[1]).slice(1)}
      </div>

    </div>
  </div>
);

export default connect(
  (state, { index }) => ({
    baby: index,
    id: Object.entries(Object.entries(index)[0][1])[0][1],
    name: Object.entries(Object.entries(index)[0][1]),
    lastName: Object.entries(Object.entries(index)[0][1])[2][1],
    isSelected: selectors.getSelectedBaby(state) === index,
  }),
  (dispatch, { index }) => ({
    onClick() {
      dispatch(selectedActions.selectBaby(index));
    },
  }),
)(Baby);
