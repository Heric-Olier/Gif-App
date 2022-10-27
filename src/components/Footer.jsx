import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    
  return (
    <footer className="footer">
      <p>
        Copyright © 2022 | Coded with
        <FontAwesomeIcon icon={faHeart} className="heart" />
        by
        <a
          className="footer-link"
          href="https://heric-olier-frontend-developer.netlify.app/"
          target="_blank"
        >
          Heric Olier
        </a>
      </p>
    </footer>
  );
};
