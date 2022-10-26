export const SeeMore = ({ onClick, pages }) => {
  
  // console.log(props, "props");

  return (
    <div className="see-more-container">
      <div className="see-more" onClick={onClick}>
        <p>See More</p>
      </div>
      <span className="pages-count"> {pages} / 50 </span>
    </div>
  );
};
