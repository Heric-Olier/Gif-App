import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const TopButton = () => {
  return (
    <>
        <button
            className="m-3 top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    </>
  );
};
