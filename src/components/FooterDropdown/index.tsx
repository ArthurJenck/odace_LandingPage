import { useState } from "react"
import chevron from "../../assets/downChevronIcon.svg"
import "./FooterDropdown.scss"

const FooterDropdown = ({ categ }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={isOpen ? "open footer-dropdown" : "footer-dropdown"}
      onClick={handleClick}
    >
      <div className="footer-dropdown__btn">
        <h3>{categ.mobileTitle}</h3>
        <img src={chevron} alt="chevron" />
      </div>
      <div className="footer-dropdown__content">
        <ul>
          {categ.links.map((link: any, id: number) => {
            return (
              <li key={id}>
                <a href={link.href}>{link.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default FooterDropdown
