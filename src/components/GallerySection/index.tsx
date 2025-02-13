import GalleryCard from "../GalleryCard"
import "./GallerySection.scss"

const GallerySection = ({ categ }: any) => {
  return (
    <section className="gallery-section">
      <h2>{categ.title}</h2>
      <div className="gallery-cards__container">
        {categ.missions.length > 0 ? (
          categ.missions.map((mission: any, index: number) => {
            return (
              <GalleryCard
                mission={mission}
                key={mission.id + index}
                index={index as number}
              />
            )
          })
        ) : (
          <p className="empty-categ">
            Pas de vidéo renseignée ici pour le moment.
          </p>
        )}
      </div>
    </section>
  )
}

export default GallerySection
