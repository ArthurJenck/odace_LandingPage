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
        <button>S'abonner</button>
      </div>
    </form>
  )
}

export default Newsletter
