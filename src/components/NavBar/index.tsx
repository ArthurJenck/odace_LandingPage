import aiSearchIcon from "../../assets/aiSearchIcon.svg"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <a href="#">Plans</a>
        <a href="#">À Propos</a>
      </div>
      <div className="nav-right">
        <a href="#ai-search">
          <img src={aiSearchIcon} alt="Icone de loupe" />
        </a>
        <a href="#">Connexion</a>
        <a href="#">Inscription</a>
      </div>
    </nav>
  )
}

export default NavBar
