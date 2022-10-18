
export const GifGridItem = ({ titile, url, id }) => {
  return (
    <div className="card">
        <img src={url} alt={titile} />
        <p>{titile.charAt(0).toUpperCase() + titile.slice(1)}</p> {/* mostramos el titulo de la imagen */}
    </div>
  )
}

