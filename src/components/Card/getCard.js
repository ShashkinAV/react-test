import React from 'react';
import Card from './Card';

const arrayCard = [
    { price: "5", users: "10", useStorage: "5", useEmail: "true" },
    { price: "10", users: "20", useStorage: "50", useEmail: "true" },
    { price: "15", users: "50", useStorage: "1", useEmail: "true" }
]

const getCard = arrayCard.map(el=> {
    return <Card price={el.price} users={el.users} useStorage={el.useStorage}/>;
})

export default getCard;