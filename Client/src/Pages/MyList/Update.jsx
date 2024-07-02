import { Typography } from "@material-tailwind/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  const {
    _id,
    spot,
    country,
    url,
    travelduration,
    location,
    visitperyear,
    description,
    averagecost,
    seasonality,
  } = data;
  const handleAddSpot = (e) => {
    e.preventDefault();
    const spot = e.target.spotname.value;
    const country = e.target.country.value;
    const url = e.target.url.value;
    const travelduration = e.target.travelduration.value;
    const location = e.target.location.value;
    const visitperyear = e.target.visitperyear.value;
    const description = e.target.description.value;
    const averagecost = e.target.averagecost.value;
    const seasonality = e.target.seasonality.value;
    // const email = user.email;
    const newUser = {
      spot,
      country,
      url,
      location,
      visitperyear,
      description,
      averagecost,
      seasonality,
      travelduration,
    };
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Updated Successfully");
        e.target.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleAddSpot}>
        <section className="px-8 py-20 container mx-auto">
          <Typography variant="h5" color="blue-gray">
            Update Spot Information
          </Typography>
          <Typography
            variant="small"
            className="text-gray-600 font-normal mt-1"
          >
            Add your Tourist information below.
          </Typography>
          <div className="flex flex-col mt-8">
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  Tourist Spot Name
                </Typography>
                <input
                  type="text"
                  name="spotname"
                  defaultValue={spot}
                  placeholder="Spot Name"
                  className="input input-lg input-bordered w-full max-w-xs"
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  Image Url
                </Typography>
                <input
                  type="text"
                  name="url"
                  defaultValue={url}
                  placeholder="Spot Name"
                  className="input input-lg input-bordered w-full max-w-xs"
                />
              </div>
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Country
              </Typography>
              <input
                type="text"
                name="country"
                defaultValue={country}
                placeholder="Country"
                className="input input-lg input-bordered w-full max-w-xs"
              />
            </div>
            {/* <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    User Name
                  </Typography>
                  <input type="text" name="name" placeholder="User Name" className="input input-lg input-bordered w-full max-w-xs" />
                </div> */}
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Location
              </Typography>
              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="location"
                className="input input-lg input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Total Visit per year
              </Typography>
              <input
                type="text"
                name="visitperyear"
                defaultValue={visitperyear}
                placeholder="Visit per year"
                className="input input-lg input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Short Description
              </Typography>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Short Description"
                className="input input-lg input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Average Cost
              </Typography>
              <input
                type="text"
                defaultValue={averagecost}
                name="averagecost"
                placeholder="Average Cost"
                className="input input-lg input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Seasonality
              </Typography>
              <input
                type="text"
                placeholder="like, summer or winter"
                name="seasonality"
                defaultValue={seasonality}
                className="input input-lg input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Travel Duration
              </Typography>
              <input
                type="text"
                defaultValue={travelduration}
                name="travelduration"
                placeholder="7 days...."
                className="input input-lg input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button className="btn btn-wide btn-success ">Update</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Update;
