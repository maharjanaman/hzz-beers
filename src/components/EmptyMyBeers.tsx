import { FC } from "react";

interface EmptyMyBeersProps {
  onAddBeerPress: () => void;
}

const EmptyMyBeers: FC<EmptyMyBeersProps> = ({ onAddBeerPress }) => {
  return (
    <div className="flex flex-col items-center pt-44 mt-4 bg-gray-200 h-screen">
      <h3 className="text-gray-400">Nothing to see yet.</h3>

      <div className="flex">
        <h3 className="text-blue-600 cursor-pointer" onClick={onAddBeerPress}>
          Click here
        </h3>

        <h3 className="text-gray-400 ml-1">to add your first beer!</h3>
      </div>
    </div>
  );
};

export default EmptyMyBeers;
