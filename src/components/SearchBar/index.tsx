import aiStarIcon from "../../assets/aiStarIcon.svg"
import arrowIcon from "../../assets/arrowRightRectangle.svg"
import "./SearchBar.scss"

const SearchBar = () => {
  return (
    <form className="header-searchBar__container">
      <img
        src={aiStarIcon}
        alt="icone IA"
        className="header-searchBar__aiIcon"
      />
      <textarea
        name="ai-search"
        id="ai-search"
        placeholder="Je souhaite accroître ma présence sur Tiktok"
      ></textarea>
      <button>
        <img
          src={arrowIcon}
          alt="Icone de flèche"
          className="header-searchBar__arrowIcon"
        />
      </button>
    </form>
  )
}

export default SearchBar
