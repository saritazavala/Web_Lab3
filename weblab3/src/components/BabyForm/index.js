import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';

const BabyForm = ({ onSubmit }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  return (
    <div className="babyForm-wrapper"> 
      <h1 className="babyForm-title">Add Baby</h1> 

      <div className="FormBaby">
      <div className = "FormField">
        <label className="FormField_Label" htmlFor="name">Name</label>
        <input type="text" className="FormField_Input" placeholder="Ingresa el nombre" value={value1} onChange={e => changeValue1(e.target.value)}/>
      </div>

      <div className = "FormField"> 
        <label className="FormField_Label" htmlFor="name">LastName</label>
        <input type="text" className="FormField_Input" placeholder="Ingresa el apellido" value={value2} onChange={e => changeValue2(e.target.value)}/>
      </div>
     
      <button className="SubmitButton" type="submit" onClick={
        () => onSubmit(value1, value2)
      }>
        {'Crear'}
      </button>
    </div>

    </div>
  );
} 


export default connect(
  (state) => ({
    id: selectors.getBabies(state),
  }),
  dispatch => ({
    onSubmit(value1, value2) {
      let babyID = uuidv4();
      dispatch(
        actions.addBaby(babyID, value1, value2),
        console.log('Baby added')
        );
    },
  }),
)(BabyForm);


