import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h2>Gif Search App</h2>
        <FontAwesomeIcon icon={faImage}
          size="2x"
          className="header_icon animate__animated animate__bounceInDown"
          />
      </div>
    </header>
  );
};
