import { useState } from "react"

const FooterDropdown = ({ categ }: any) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={isOpen ? "open footer-dropdown" : "footer-dropdown"}
      onClick={handleClick}
    >
      <h3>{categ.title}</h3>
      <ul>
        {categ.links.map((link: any, id: number) => {
          console.log(link)
          return (
            <li key={id}>
              <a href={link.href}>{link.text}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterDropdown
