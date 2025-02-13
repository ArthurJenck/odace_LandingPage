import aiSearchIcon from "../../assets/aiSearchIcon.svg"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <a href="https://odaceplus.com/fr/a-propos">Plans</a>
        <a href="https://odaceplus.com/fr/a-propos">À Propos</a>
      </div>
      <div className="nav-right">
        <a href="https://odaceplus.com/fr/search">
          <img src={aiSearchIcon} alt="Icone de loupe" />
        </a>
        <a href="https://odaceplus.com/fr/signin">Connexion</a>
        <a href="https://odaceplus.com/fr/signup">Inscription</a>
      </div>
    </nav>
  )
}

export default NavBar
