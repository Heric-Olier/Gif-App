import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = ( categories ) => { // recibe como argumento la categoria
  const [images, setImages] = useState([]); // creamos el estado images y su funcion setImages
  const [isLoading, setIsLoading] = useState(true); // creamos el estado isLoading y su funcion setIsLoading 

  useEffect(() => { 
    // useEffect se ejecuta cada vez que el componente se renderiza
    getGifs(categories).then(setImages); // getGifs es una funcion que retorna una promesa, cuando la promesa se resuelve se ejecuta el then
    setIsLoading(false); // actualizamos el estado isLoading a false para indicar que ya se cargaron las imagenes
  }, [categories]); // el segundo argumento de useEffect es un arreglo de dependencias, si el arreglo esta vacio se ejecuta solo una vez, si tiene un elemento se ejecuta cada vez que el elemento cambie, si tiene mas de un elemento se ejecuta cada vez que alguno de los elementos cambie

  return {
    images, // retornamos el estado images
    isLoading // retornamos el estado isLoading
  };
};
