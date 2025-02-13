import "./GalleryCard.scss"

const GalleryCard = ({ mission }: any) => {
  return (
    <div>
      <h3>{mission.title}</h3>
      <img src={mission.image} alt={mission.title} />
    </div>
  )
}

export default GalleryCard
