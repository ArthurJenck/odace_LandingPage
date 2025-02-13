import Banner1 from "../../assets/banners/banner-1.jpg"
import Banner2 from "../../assets/banners/banner-2.jpg"
import Banner3 from "../../assets/banners/banner-3.jpg"
import "./BannerCarousel.scss"

const Banner = () => {
  return (
    <div className="carrousel">
      <img
        src={Banner1}
        alt="Image de bannière"
        title="Diffuser du contenu sur vos réseaux est simples, rapide, économique. Bienvenue sur odace+"
      />
      <img
        src={Banner2}
        alt="Image de bannière"
        title="Votre restaurant mérite de percer"
      />
      <img
        src={Banner3}
        alt="Image de bannière"
        title="Vos artistes vont cartonner sur Instagram. Découvrir les formats :"
      />
    </div>
  )
}

export default Banner
