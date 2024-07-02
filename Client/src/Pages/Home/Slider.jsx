import { Button, Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner1.svg";
import banner2 from "../../assets/banner2.svg";
import banner3 from "../../assets/banner3.svg";

const Slider = () => {
  return (
    <div>
      <Carousel className="rounded-xl overflow-y-hidden h-[80vh]">
        <div className="relative h-full w-full">
          <img
            src={banner}
            alt="image 1"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 justify-center items-center">
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="w-3/4 text-center md:w-2/4"
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Wanna Travel The whole World?
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              ></Typography>
              <div className="flex justify-center gap-2">
                <Link to={"/allSpot"}>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={banner2}
            alt="image 1"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 justify-center items-center">
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="w-3/4 text-center md:w-2/4"
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Find Best Price For You.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              ></Typography>
              <div className="flex justify-center gap-2">
                <Link to={"/allSpot"}>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={banner3}
            alt="image 1"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 justify-center items-center">
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="w-3/4 text-center md:w-2/4"
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Discover Your Fav Place.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              ></Typography>
              <div className="flex justify-center gap-2">
                <Link to={"/allSpot"}>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
