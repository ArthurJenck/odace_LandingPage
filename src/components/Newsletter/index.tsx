import "./Newsletter.scss"

const Newsletter = () => {
  return (
    <form className="newsletter-wrapper">
      <label htmlFor="newsletter-email">
        Abonnez-vous à notre newsletter :
      </label>
      <input
        type="email"
        name="email"
        id="newsletter-email"
        autoComplete="on"
      />
      <button>S'abonner</button>
    </form>
  )
}

export default Newsletter
