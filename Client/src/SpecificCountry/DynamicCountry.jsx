import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Pages/AllSpot/Card';

const DynamicCountry = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map((i,idx)=><Card key={idx} data={i}></Card>)
            }
        </div>
    );
};

export default DynamicCountry;