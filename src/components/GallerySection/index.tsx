import GalleryCard from "../GalleryCard"
import "./GallerySection.scss"

const GallerySection = ({ categ }: any) => {
  return (
    <section>
      <h2>{categ.title}</h2>
      {categ.missions.map((mission: any, index: number) => {
        return <GalleryCard mission={mission} key={mission.id + index} />
      })}
    </section>
  )
}

export default GallerySection
