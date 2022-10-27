import { useEffect, useState } from "react";

export const activeTopButton = () => {
  const [active, setActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => { // funcion que se ejecuta cada vez que se hace scroll
    setScrollY(window.pageYOffset); // actualizamos el estado scrollY con el valor de la posicion del scroll
    setActive(window.pageYOffset > 500); // actualizamos el estado active con el valor de la posicion del scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }); // passive: true para que no se active el scroll del navegador
    return () => window.removeEventListener("scroll", handleScroll); // removemos el evento scroll
  }, []);

  return {
    active,
    scrollY,
  };
};
