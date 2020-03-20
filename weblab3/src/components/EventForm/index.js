import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';


const EventForm = ({ onSubmit, babyID, babyName }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  
  return (
    <div className="eventForm-wrapper"> 
      <h2 className="eventForm-title">New event</h2>
      <h1 className="baby-selected">Baby: {babyName}</h1> 

      <div className="FormEvent">
      <div className = "FormField">
        <label className="FormField_Label" htmlFor="name">Activity</label>
        <select className="FormField_Options" value={value1} onChange={e => changeValue1(e.target.value)}>
            <option value="Ninguna">-Options-</option>
            <option value="Pipi">Pee</option>
            <option value="Siesta">Sleep</option>
            <option value="Pacha">Bottle</option>
            <option value="Pecho">Breast</option>
            <option value="Popo">Poop</option>
          </select>
      </div>

      <div className = "FormField"> 
        <label className="FormField_Label" htmlFor="name">Notes</label>
        <input type="text" className="FormField_Input" placeholder="Write notes" value={value2} onChange={e => changeValue2(e.target.value)}/>
      </div>
     
      <button className="SubmitButton" type="submit" onClick={
        () => onSubmit(value1, value2, babyID, babyName)
      }>
        {'Crear'}
      </button>
    </div>

    </div>
  );
} 


export default connect(
  (state) => ({
    babyID: Object.entries(selectors.getSelectedBaby(state))[0][1],
    babyName: Object.entries(selectors.getSelectedBaby(state))[1][1],
  }),
  (dispatch, {state}) => ({
    onSubmit(value1, value2, babyID, babyName) {
      let eventID = uuidv4();
      console.log(new Date());
      dispatch(
        actions.addEvent(eventID, value1, new Date(), value2, babyName),
        console.log('Event added')
        );
      dispatch(
        actions.assignEventToBaby(babyID, eventID),
        console.log('Event assigned')
        );
    },
  }),
)(EventForm);


