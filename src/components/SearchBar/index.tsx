import aiStarIcon from "../../assets/aiStarIcon.svg"
import arrowIcon from "../../assets/arrowRightRectangle.svg"
import "./SearchBar.scss"

const SearchBar = () => {
  return (
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
  )
}

export default SearchBar
