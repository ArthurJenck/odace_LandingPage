import AOS from "aos"
import "aos/dist/aos.css"
import "./GalleryCard.scss"
import { useEffect, useRef, useState } from "react"

const GalleryCard = ({ mission, index }: any) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [aosDelay, setAosDelay] = useState(`${index}00`)

  useEffect(() => {
    AOS.init()

    const container = document.querySelector(
      ".gallery-cards__container"
    ) as Element

    const gridCols = parseInt(
      window.getComputedStyle(container).gridTemplate[
        window.getComputedStyle(container).gridTemplate.length - 7
      ]
    )

    if (index >= gridCols - 1) {
      setAosDelay(`${index % gridCols}00`)
    }
  }, [index, aosDelay])

  return (
    <div
      className="gallery-card"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay={aosDelay}
      ref={cardRef}
    >
      <img src={mission.image} alt={mission.title} />
    </div>
  )
}

export default GalleryCard
