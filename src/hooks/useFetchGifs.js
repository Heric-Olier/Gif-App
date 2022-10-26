import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = ( categories, pageSearch ) => {
  const [page, setPage] = useState(pageSearch);
  const [images, setImages] = useState([]); // creamos el estado images y su funcion setImages
  const [isLoading, setIsLoading] = useState(true); // creamos el estado isLoading y su funcion setIsLoading 

  useEffect(() => { 
    getGifs(categories, page).then((images) => { // llamamos a la funcion getGifs y pasamos como argumento la categoria y el estado page
      setImages(images); // actualizamos el estado images con el valor de la promesa
      setIsLoading(false); // actualizamos el estado isLoading con el valor de la promesa
    });
  }, [categories, page]); // el useEffect se ejecutara cada vez que categories o page cambien de valor


  return {
    images,
    isLoading,
    page,
    setPage,
  };
};
