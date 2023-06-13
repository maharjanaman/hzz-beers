import react from "../assets/react.svg";

const Beer = () => {
  return (
    <div className="flex items-center p-4 shadow-md rounded-md mb-4 bg-white">
      <img className="w-32 h-32" src={react} />

      <div className="grow ml-4">
        <h1 className="text-2xl font-bold">Better Beer</h1>

        <h2 className="text-md text-orange-400">IPA German</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis
          consequuntur sint error facilis aspernatur aliquam iure vero nisi,
          animi minus illum. Aliquam, praesentium enim hic temporibus fuga
          consequatur aliquid?
        </p>
      </div>
    </div>
  );
};

export default Beer;
