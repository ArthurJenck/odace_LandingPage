import Glide from "@glidejs/glide"
import Banner1 from "../../assets/banners/banner-1.jpg"
import Banner2 from "../../assets/banners/banner-2.jpg"
import Banner3 from "../../assets/banners/banner-3.jpg"
import "./BannerCarousel.scss"
import { useEffect } from "react"

const Banner = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "slider",
      touchAngle: 0,
      autoplay: 4000,
    }).mount()
  }, [])

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <img
              src={Banner1}
              alt="Image de bannière"
              title="Diffuser du contenu sur vos réseaux est simples, rapide, économique. Bienvenue sur odace+"
            />
          </li>
          <li className="glide__slide">
            <img
              src={Banner2}
              alt="Image de bannière"
              title="Votre restaurant mérite de percer"
            />
          </li>
          <li className="glide__slide">
            <img
              src={Banner3}
              alt="Image de bannière"
              title="Vos artistes vont cartonner sur Instagram. Découvrir les formats :"
            />
          </li>
        </ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>

    // <div className="carousel">
    //   <img
    //     src={Banner1}
    //     alt="Image de bannière"
    //     title="Diffuser du contenu sur vos réseaux est simples, rapide, économique. Bienvenue sur odace+"
    //   />
    //   <img
    //     src={Banner2}
    //     alt="Image de bannière"
    //     title="Votre restaurant mérite de percer"
    //   />
    //   <img
    //     src={Banner3}
    //     alt="Image de bannière"
    //     title="Vos artistes vont cartonner sur Instagram. Découvrir les formats :"
    //   />
    // </div>
  )
}

export default Banner
