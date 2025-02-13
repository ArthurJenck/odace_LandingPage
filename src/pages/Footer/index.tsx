import FooterBottom from "../../components/FooterBottom"
import footerCategs from "../../data/footerCategs.json"
import FooterCateg from "../../components/FooterCateg"
import "./Footer.scss"
import FooterAside from "../../components/FooterAside"

const Footer = () => {
  return (
    <footer>
      <FooterAside />
      <div className="footer-links">
        {footerCategs.map((categ, index) => {
          return !categ.isAside && <FooterCateg categ={categ} key={index} />
        })}
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
