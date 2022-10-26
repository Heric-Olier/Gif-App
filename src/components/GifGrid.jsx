import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { SeeMore } from "./SeeMore";
import { Alerts } from "./Alerts";


export const GifGrid = ({ categories }) => {
  const { images, isLoading, page, setPage } = useFetchGifs(categories, 20);
  console.log(images.length, "images.length");
  
  const handleSeeMore = () => {
   if (images.length >= 50) {
    Alerts.fire({
      icon: "error",
      title: "No more gifs to show",
    });
    return
   } else {
    setPage(page + 20);
   }
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
      <SeeMore onClick={handleSeeMore}  pages={images.length} />
        </div>
      )}
    </>
  );
}