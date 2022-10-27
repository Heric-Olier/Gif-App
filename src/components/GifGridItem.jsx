export const GifGridItem = ({ titile, url, link }) => {
  const handleOpenLink = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <img src={url} alt={titile} onClick={handleOpenLink} />
      <div className="card-body">
        <h5 className="card-title">{titile}</h5>
      </div>
    </>
  );
};
