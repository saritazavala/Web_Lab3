import Select from 'react-select';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import React, { useState }from 'react';


import * as selectors from '../../reducers';
import * as actions from '../../actions/event';
import * as babyActions from '../../actions/baby';
import './styles.css'


const types = [
  { value: 'Nap', label: 'Nap' },
  { value: 'Bottle', label: 'Bottle' },
  { value: 'Poop', label: 'Poop' },
  { value: 'Pee', label: 'Pee' },
  { value: 'Breast', label: 'Breast' },
];



const EventForm = ({ options, onSubmit, events, onBabySelected, onEventDeleted}) =>{
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  const [baby, changeBaby] = useState('');
  onBabySelected(baby);

  return(
    
    <div className="event__form">
      <div className="wrapper__select__button__newEvent">
      <Link to="/baby"><button className="add__baby__btn"> + </button></Link>
        <Select className="select__events"  options = {options.map(
            baby => ({
              value: baby.id, 
              label: baby.name + " " + baby.lastName
            }
          ))}
        placeholder = "Baby Name" onChange = {
          e => {
            changeBaby(e.value);
            onBabySelected(baby);
          }} />
         
         <div className="events__wrapper"></div>
         <div className="types__annotations__wrapper">
           <Select className="select__types" options={types} placeholder="Type" 
            onChange = {e => changeValue1(e.value)}/>
           <textarea className="annotations__txtarea" rows="14" cols="17" 
           placeholder="Annotations" value={value2} 
           onChange= {e => changeValue2(e.target.value)}/>
           <button type="button" className="create__event__btn" onClick= {
        
             () => {
               changeValue2(" ");

               onBabySelected(baby);
               onSubmit(baby, uuidv4(), value1, value2);
             }
           }> Create </button>
         </div>
      </div>
      <div className="event">
        {events.map( e =>
          event(e.id, e.date.toString(), e.type, e.notes, onEventDeleted)
        )}
      </div>
    </div>
  )
};

const event = (key, date, type, comments, onEventDeleted) =>(
  <div key={key} className="individual__event">
    <button className="delete__event__btn" onClick ={ () => onEventDeleted(key)}>
       {'X'}
    </button>
    <label className= "date">{date}</label> <br />
    <label className= "type">{"Event Type: " + type}</label> <br />
    <textarea disabled className = "notes">{"Parents' notes: " +comments}</textarea>
  </div>
);


const mapStateToProps = state =>(
  {
    selectedBaby: selectors.selectBaby(state),
    options : selectors.getBabies(state),
    events: selectors.getEvents(state, selectors.selectBaby(state))
});

const dispatchStateToProps = () => (
  dispatch => ({
    onSubmit(babyId, id, type, notes) {
      dispatch(actions.addEvent(babyId, id, type, notes))
    },
    onBabySelected(babyId){
      dispatch(babyActions.selectBaby(babyId))
    },
    onEventDeleted(eventId){
      dispatch(actions.deleteEvent(eventId))
    },
  })
);

export default connect(mapStateToProps, dispatchStateToProps)(EventForm);