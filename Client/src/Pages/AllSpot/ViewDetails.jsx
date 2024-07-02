import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapLocation } from 'react-icons/fa6';
import { RiLandscapeLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData();
    const {visitperyear, averagecost, description, url, location, spot, seasonality} = data;
    return (
        <div>
            <Helmet>
        <title>{`Dream Go ${spot}`}</title>
      </Helmet>
      <div className="lg:flex lg:justify-between space-y-2">
        <h1 className="text-2xl">{spot}</h1>
        <p className="text-2xl font-bold">Average Cost: {averagecost}</p>
      </div>
      <h2 className="bg-base-300 w-16 text-center">Visitor/yr {visitperyear}</h2>
      <p className='flex gap-3 items-center text-2xl'><FaMapLocation /> {location}</p>
      <div className="w-full">
        <img src={url} alt="" className="h-auto w-auto" />
      </div>
      <p className="text-left font-medium text-xl">{description}</p>
      {/* <h1 className='text-2xl font-semibold'>Facilities</h1>
      <ul>
        {facilities.map((i, idx) => (
          <li key={idx}>{idx+1}. {i}</li>
        ))}
      </ul> */}
      <h2 className='text-xl flex gap-2 items-center font-bold'>Best time to visit: <RiLandscapeLine /> {seasonality}</h2>
        </div>
    );
};

export default ViewDetails;