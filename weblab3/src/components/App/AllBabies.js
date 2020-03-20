import React, {useState, useEffect} from 'react';
import BabyForm from '../BabyForm';
import Babies from '../Babies';

function AllBabies(){

    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div className = "babies-page">
            <Babies />
            <BabyForm />
        </div>
    )
}
export default AllBabies;