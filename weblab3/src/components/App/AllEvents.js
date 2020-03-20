import React, {useState, useEffect} from 'react';
import EventForm from '../EventForm';
import Events from '../Events';


function AllEvents(){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div className = "events-page"  >
            <Events />
            <EventForm />
        </div>
    )
}
export default AllEvents;