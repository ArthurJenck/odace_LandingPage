import odaceLogo from "../../assets/odaceLogo.svg"
import aiSearchIcon from "../../assets/aiSearchIcon.svg"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav>
      <div className="nav-mobile">
        <a href="https://odaceplus.com/fr/" className="logo">
          <img src={odaceLogo} alt="logo odace+" />
        </a>
        <a href="https://odaceplus.com/fr/search">
          <img src={aiSearchIcon} alt="Icone de loupe" />
        </a>
        <div className="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="nav-desk">
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
      </div>
    </nav>
  )
}

export default NavBar
