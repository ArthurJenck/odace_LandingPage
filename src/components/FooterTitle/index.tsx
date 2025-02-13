import arrowIcon from "../../assets/arrowRightRectangle.svg"
import "./FooterTitle.scss"

const FooterTitle = () => {
  return (
    <>
      <h2>Service client 7j/7</h2>
      <button>
        Contactez notre équipe
        <img src={arrowIcon} alt="icone de flèche" className="mobile" />
      </button>
      <p className="footer-aside__subtitle">
        De 8h à 20h par téléphone &
        <span> 24h/24 par e-mail et messagerie.</span>
      </p>
    </>
  )
}

export default FooterTitle
