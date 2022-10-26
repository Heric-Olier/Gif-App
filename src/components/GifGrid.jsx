import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { SeeMore } from "./SeeMore";

export const GifGrid = ({ categories }) => {
  const { images, isLoading, page, setPage } = useFetchGifs(categories, 20);

  const handleSeeMore = () => {
    setPage(page + 20);
  };

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categories}</h3>
      {isLoading ? (
        <p className="animate__animated animate__flash">Loading...</p>
      ) : (
        <div className="card-grid">
          {images.map((img) => {
            return (
              <GifGridItem
                key={img.id}
                {...img}
              />
            );
          })}
        </div>
      )}
      <SeeMore onClick={handleSeeMore} />
    </>
  );
}