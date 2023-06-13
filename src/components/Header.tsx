import { FC } from "react";

interface HeaderProps {
  pageIndex: number;
  onSetPage: (pageIndex: number) => void;
  onAddBeerPress: () => void;
}

const Header: FC<HeaderProps> = ({ pageIndex, onSetPage, onAddBeerPress }) => {
  return (
    <div className="flex items-center h-14">
      <div className="grow">
        <button className="text-lg" onClick={() => onSetPage(0)}>
          All Beers
        </button>

        <button className="ml-8 text-lg" onClick={() => onSetPage(1)}>
          My Beers
        </button>
      </div>

      <button
        className={`bg-blue-600 text-white rounded-md px-4 py-2 ${
          pageIndex === 0 ? "hidden" : ""
        }`}
        onClick={onAddBeerPress}
      >
        Add a new beer
      </button>
    </div>
  );
};

export default Header;
