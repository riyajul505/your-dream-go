import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CountryCard = ({ data }) => {
  const { url, country, description } = data;
  return (
    <div>
      <Link to={`/selectedCountry/${country}`}>
        <Card className="mt-6 w-auto">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={url} alt={`${country}-image`} />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {country}
            </Typography>
            <Typography>{description}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default CountryCard;
