import FooterBottom from "../../components/FooterBottom"
import footerCategs from "../../data/footerCategs.json"
import FooterCateg from "../../components/FooterCateg"
import "./Footer.scss"
import FooterAside from "../../components/FooterAside"
import FooterDropdown from "../../components/FooterDropdown"

const Footer = () => {
  return (
    <footer>
      <FooterAside />
      <div className="footer-links desk">
        {footerCategs.map((categ, index) => {
          return !categ.isAside && <FooterCateg categ={categ} key={index} />
        })}
      </div>
      <div className="footer-links mobile">
        {footerCategs.map((categ, index) => {
          return <FooterDropdown categ={categ} key={index} />
        })}
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
