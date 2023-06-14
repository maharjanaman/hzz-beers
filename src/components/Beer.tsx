import { FC } from "react";
import { Tooltip } from "react-tooltip";

import HouzzBeer from "../assets/houzzBeer.png";

interface BeerProps {
  image: string;
  name: string;
  tagline: string;
  description: string;
  ingredients?: string[];
}

const Beer: FC<BeerProps> = ({
  image,
  name,
  tagline,
  description,
  ingredients,
}) => {
  const combinedIngredients =
    ingredients && ingredients.length > 0 ? ingredients.join(", ") : "0";

  return (
    <div className="flex items-center p-4 shadow-md rounded-md mb-4 bg-white hover:bg-blue-100">
      <div className="flex basis-1/4 justify-center items-center">
        <img
          className="object-cover h-36"
          src={image || HouzzBeer}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={`Ingredients: ${combinedIngredients}`}
          data-tooltip-place="top"
        />

        <Tooltip id="my-tooltip" />
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
