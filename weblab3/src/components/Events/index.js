import React, { useState } from 'react';
import './styles.css'
import EventForm from './eventForm';

const events = () =>(
    <div className="event__wrapper">
    <div className="event__form__wrapper">
        <div className="event__header"><label className="event__text">{'Babies'}</label></div>
        <EventForm/>
    </div>   
</div>  
); export default events;