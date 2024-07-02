import React from 'react';
import AllSpot from '../AllSpot/AllSpot';
import CountrySec from './CountrySec';
import Slider from './Slider';

const Home = () => {
    
    return (
        <div>
            <div className='w-full mb-10'><Slider/></div>
            <h1 className='text-3xl font-bold flex justify-center items-center mt-10 mb-2'>Popular Places</h1>
            <AllSpot/>
            <h1 className='text-3xl font-bold flex justify-center items-center mt-10 mb-2'>All the country</h1>
            <CountrySec/>
        </div>
    );
};

export default Home;

