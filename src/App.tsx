/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";

import { ArrowDown, Beer, EmptyMyBeers, Header, Spinner } from "./components";
import { useFetchWithPagination, useAddBeerModal } from "./hooks";
import { useMyBeersFacade } from "./facades";

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
  const { beers: myBeers } = useMyBeersFacade();
  const { openModal, CModal } = useAddBeerModal();

  const handleSetPage = (pageIndex: number) => {
    setPageIndex(pageIndex);
  };

  const handleAddBeerPress = () => {
    openModal();
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
          ingredients={Object.keys(beer?.ingredients || {})}
        />
      )),
    [beers]
  );

  const myBeersList = useMemo(
    () =>
      myBeers.map((beer: any) => (
        <Beer
          key={beer.id}
          image={beer?.image_url || ""}
          name={beer?.name || ""}
          tagline={beer?.tagline || ""}
          description={beer?.description || ""}
        />
      )),
    [myBeers]
  );

  const renderMyBeers = () => {
    if (myBeers.length > 0) {
      return (
        <div className="lg:columns-2 md:columns-1 gap-4 py-4">
          {myBeersList}
        </div>
      );
    }

    return <EmptyMyBeers onAddBeerPress={handleAddBeerPress} />;
  };

  const renderContent = () => {
    switch (pageIndex) {
      case 0:
        return (
          <div className="lg:columns-2 md:columns-1 gap-4 py-4">
            {beersList}
          </div>
        );
      case 1:
        return renderMyBeers();
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-10 pt-10 pb-6 min-h-screen">
      <CModal />

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
        renderContent()
      )}

      {!loading && hasMore && !error && pageIndex === 0 && (
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
