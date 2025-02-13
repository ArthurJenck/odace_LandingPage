import downChevronIcon from "../../assets/downChevronIcon.svg"
import SearchBar from "../../components/SearchBar"
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <h1>
        <strong>
          odace<span>+</span>
        </strong>
        Laissez libre court à votre <em>imagination</em>
      </h1>
      <SearchBar />
      <button className="header-catalogue__btn">
        Catalogue <img src={downChevronIcon} alt="Chevron vers le bas" />
      </button>
    </header>
  )
}

export default Header
