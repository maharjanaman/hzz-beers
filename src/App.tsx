/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import { ArrowDown, Beer, Header, Spinner } from "./components";
import { useFetchWithPagination } from "./hooks";

function App() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const {
    data: beers,
    loading,
    hasMore,
    loadMore,
    loadingMore,
    error,
  } = useFetchWithPagination("https://api.punkapi.com/v2/beers");

  const handleSetPage = (pageIndex: number) => {
    setPageIndex(pageIndex);
  };

  const handleAddBeerPress = () => {
    console.warn("Beer");
  };

  const beersList = useMemo(
    () =>
      beers.map((beer: any) => (
        <Beer
          key={beer.id}
          image={beer?.image_url || ""}
          name={beer?.name || ""}
          tagline={beer?.tagline || ""}
          description={beer?.description || ""}
        />
      )),
    [beers]
  );

  return (
    <div className="container mx-auto px-10 pt-10 pb-6 min-h-screen bg-gray-50">
      <Header
        pageIndex={pageIndex}
        onSetPage={handleSetPage}
        onAddBeerPress={handleAddBeerPress}
      />

      {loading && beers.length === 0 ? (
        <Spinner />
      ) : error ? (
        <div className="flex justify-center items-center text-red-600">
          <p>{error}</p>
        </div>
      ) : (
        <div className="lg:columns-2 md:columns-1 gap-4 py-4">{beersList}</div>
      )}

      {!loading && hasMore && !error && (
        <div
          role="button"
          className="flex justify-center items-center text-blue-600"
          onClick={loadMore}
        >
          {loadingMore ? (
            <Spinner />
          ) : (
            <>
              <span>Load More</span>

              <ArrowDown />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
