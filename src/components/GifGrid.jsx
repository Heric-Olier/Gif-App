import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { SeeMore } from "./SeeMore";
import { Alerts } from "./Alerts";
import { motion } from "framer-motion"


export const GifGrid = ({ categories }) => {
  const { images, isLoading, page, setPage } = useFetchGifs(categories, 20);
  
  // console.log(images.length, "images.length");

  
  

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .2,
      }
    }
  }
  
  const itemAnimated = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    show: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <>
      <div className="category-title">
      <h3 >{categories}</h3>
      </div>
      {isLoading ? (
        <p className="animate__animated animate__flash">Loading...</p>
      ) : (
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
         className="card-grid">
          {images.map((img) => {
            return (
              <motion.div
              variants={itemAnimated}
              key={img.id}
              className="card"
              >
                <GifGridItem
        
                  key={img.id}
                  {...img}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}
      <SeeMore onClick={handleSeeMore} pages={images.length} />
    </>
  );
};