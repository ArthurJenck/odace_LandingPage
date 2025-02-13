import { useEffect, useState } from "react"
import "./GalleryWrapper.scss"
import GallerySection from "../../components/GallerySection"

const GalleryWrapper = () => {
  const [thumbnailCategs, setThumbnailsCategs] = useState<any[]>()

  useEffect(() => {
    fetch("https://backend.odaceplus.com/api/v1/landing/").then((res) =>
      res.json().then((data) => {
        setThumbnailsCategs(data)
      })
    )
  }, [])

  return (
    <main className="gallery-wrapper">
      {thumbnailCategs
        ? thumbnailCategs.map((categ, index) => {
            return <GallerySection categ={categ} key={categ.id + index} />
          })
        : "Chargement..."}
    </main>
  )
}

export default GalleryWrapper
