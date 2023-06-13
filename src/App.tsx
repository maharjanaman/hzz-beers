import { useState } from "react";
import { Beer, Header } from "./components";

function App() {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const handleSetPage = (pageIndex: number) => {
    setPageIndex(pageIndex)
  }

  const handleAddBeerPress = () => {
    console.warn("Beer");
  };

  return (
    <div className="container mx-auto px-10 pt-10 pb-6 min-h-screen bg-gray-50">
      <Header pageIndex={pageIndex} onSetPage={handleSetPage} onAddBeerPress={handleAddBeerPress} />

      <div className="lg:columns-2 md:columns-1 gap-4 py-4">
        {Array(10)
          .fill(1)
          .map(() => (
            <Beer />
          ))}
      </div>
    </div>
  );
}

export default App;
