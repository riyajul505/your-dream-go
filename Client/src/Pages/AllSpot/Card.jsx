import { Link } from "react-router-dom";

const Card = ({ data }) => {
  // console.log(data, "card data");
  const {
    _id,
    url,
    country,
    description,
    averagecost,
    spot,
    visitperyear,
    seasonality,
  } = data;
  return (
    <div>
      <div className="card w-auto bg-base-100 shadow-xl">
        <figure>
          <img src={url} alt={spot} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spot}</h2>
          <p>Average Cost: {averagecost}</p>
          <p>total visit/yr {visitperyear}</p>
          <p>Best time to visit {seasonality}</p>
          <div className="card-actions justify-end">
            <Link to={`/youchoose/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
