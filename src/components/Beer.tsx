import { FC } from "react";

interface BeerProps {
  image: string;
  name: string;
  tagline: string;
  description: string;
}

const Beer: FC<BeerProps> = ({ image, name, tagline, description }) => {
  return (
    <div className="flex items-center p-4 shadow-md rounded-md mb-4 bg-white">
      <div className="flex basis-1/4 justify-center items-center">
        <img className="object-cover h-36" src={image} />
      </div>

      <div className="flex flex-col justify-center items-start text-left ml-4 basis-3/4">
        <h1 className="text-2xl font-bold line-clamp-1">{name}</h1>

        <h2 className="text-md text-orange-400 line-clamp-1">{tagline}</h2>

        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default Beer;
