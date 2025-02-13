import odaceLogo from "../../assets/odaceLogo.svg"
import "./FooterTitle.scss"

const FooterTitle = () => {
  return (
    <>
      <h2>
        <img src={odaceLogo} alt="logo odace" />
        Service client 7j/7
      </h2>
      <button>Contactez notre équipe</button>
      <p className="footer-contact__subtitle">
        De 8h à 20h par téléphone & 24h/24 par e-mail et messagerie.
      </p>
    </>
  )
}

export default FooterTitle
