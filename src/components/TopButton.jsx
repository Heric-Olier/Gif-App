import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export const TopButton = () => {
  return (
    <>
      <motion.button
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        className="m-3 top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon icon={faArrowUp} />
        <div className="animation-arrow-top"></div>
      </motion.button>
    </>
  );
};
