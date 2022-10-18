import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categories }) => {
  const { images, isLoading } = useFetchGifs(categories);

  return (
    <>
      <h3>{categories}</h3> {/* mostramos el titulo de la categoria */}
      {isLoading && <h2>Loading...</h2>}{" "}
      {/* mostramos un mensaje mientras se cargan las imagenes */}
      <div className="card-grid">
        {images.map(
          (
            image // recorremos el arreglo de imagenes y por cada imagen retornamos un componente GifGridItem
          ) => (
            <GifGridItem key={image.id} {...image} /> // pasamos las propiedades id y title al componente GifGridItem
          )
        )}
      </div>
    </>
  );
};
