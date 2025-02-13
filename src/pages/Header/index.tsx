import aiStarIcon from "../../assets/aiStarIcon.svg"
import arrowIcon from "../../assets/arrowRightRectangle.svg"
import downChevronIcon from "../../assets/downChevronIcon.svg"
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <h1>
        <strong>Odace+</strong>
        Laissez libre court à votre <em>imagination</em>
      </h1>
      <form className="header-searchBar__container">
        <img src={aiStarIcon} alt="icone IA" />
        <input
          type="text"
          name="ai-search"
          id="ai-search"
          placeholder="Je souhaite accroître ma présence sur Tiktok"
        />
        <button>
          <img src={arrowIcon} alt="Icone de flèche" />
        </button>
      </form>
      <button>
        Catalogue <img src={downChevronIcon} alt="Chevron vers le bas" />
      </button>
    </header>
  )
}

export default Header
