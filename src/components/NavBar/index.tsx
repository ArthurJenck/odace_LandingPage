import odaceLogo from "../../assets/odaceLogo.svg"
import aiSearchIcon from "../../assets/aiSearchIcon.svg"
import "./NavBar.scss"
import { useState } from "react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <div className="nav-mobile">
        <a href="https://odaceplus.com/fr/" className="logo">
          <img src={odaceLogo} alt="logo odace+" />
        </a>
        <a href="https://odaceplus.com/fr/search" className="nav-search__link">
          <img src={aiSearchIcon} alt="Icone de loupe" />
        </a>
        <div className="burger-btn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={isOpen ? "open burger-menu" : "burger-menu"}>
          <div className="burger-close__btn" onClick={handleClick}>
            ⨉
          </div>
          <a href="#" className="logo">
            <img src={odaceLogo} alt="logo odace" />
          </a>
          <ul className="burger-menu__list">
            <li>
              <a href="https://odaceplus.com/fr/a-propos">À propos</a>
            </li>
            <li>
              <a href="https://odaceplus.com/fr/tarifs">Plans</a>
            </li>
            <li>
              <a href="https://odaceplus.com/fr/ressources">Ressources</a>
            </li>
            <li>
              <a href="mailto:support@odaceplus.com">Contact</a>
            </li>
          </ul>
          <div className="burger-menu__account">
            <a href="https://odaceplus.com/fr/signup">Inscription</a>
            <a href="https://odaceplus.com/fr/signin">Connexion</a>
          </div>
        </div>
      </div>
      <div className="nav-desk">
        <div className="nav-left">
          <a href="https://odaceplus.com/fr/tarifs">Plans</a>
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
