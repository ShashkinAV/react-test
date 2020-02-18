import React from 'react';
import Hero from '../../components/Hero/Hero';
import getCard from '../../components/Card/getCard';

const Pricing = (props) => {
    return (
        <div className="container">
            <Hero />
            <div className="card-deck mb-3 text-center">
               {getCard}
            </div>
        </div>
    );
}
export default Pricing;