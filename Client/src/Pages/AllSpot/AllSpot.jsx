import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Card from "./Card";

const AllSpot = () => {
  const axiosSecure = useAxiosSecure();
  // const data = useLoaderData();
  const [spotData, setSpotData] = useState([]);
  useEffect(() => {
    axiosSecure.get("/allspot")
      .then((data) => setSpotData(data.data));


    // fetch("http://localhost:5000/allspot")
    //   .then((res) => res.json())
    //   .then((data) => setSpotData(data));
  }, []);
  // console.log(data);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {spotData.map((i, idx) => (
        <Card key={idx} data={i}></Card>
      ))}
    </div>
  );
};

export default AllSpot;
