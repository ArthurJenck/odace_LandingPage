import arrowIcon from "../../assets/arrowRightSquare.svg"
import "./Newsletter.scss"

const Newsletter = () => {
  return (
    <form className="newsletter-wrapper">
      <label htmlFor="newsletter-email">
        Abonnez-vous à notre newsletter :
      </label>
      <div className="newsletter-input__container">
        <input
          type="email"
          name="email"
          id="newsletter-email"
          placeholder="Entrez votre adresse e-mail"
          autoComplete="on"
        />
        <button className="desk">S'abonner</button>
        <button className="mobile">
          <img src={arrowIcon} alt="icone de flèche" />
        </button>
      </div>
    </form>
  )
}

export default Newsletter
