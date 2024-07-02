import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const CountrySec = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/country-section')
        .then(res => res.json())
        .then(data => setCountry(data));
    },[]);
    // console.log(country, 'countryyy')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                country.map((i,idx)=><CountryCard key={idx} data={i}></CountryCard>)
            }
        </div>
    );
};

export default CountrySec;