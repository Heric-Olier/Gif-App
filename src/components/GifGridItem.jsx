
export const GifGridItem = ({ titile, url, link }) => {
  
  const handleOpenLink = () => {
    window.open(link, "_blank"); // abre el link en una nueva pestaña
  };



  return (
    <div className="card" onClick={handleOpenLink}>
        <img src={url} alt={titile} />
        <div className="card-body">
        <p>{titile.charAt(0).toUpperCase() + titile.slice(1)}</p> {/* mostramos el titulo de la imagen */}
        </div>
    </div>
  )
}

